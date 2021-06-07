/*  
💥 Title : UploadDialog
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 05/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "./UploadDialog.css";
import fileUpload from "../../../images/Icons/file.svg";
import { useEffect, useRef, useState } from "react";
import { ImagePreview, UploadDialogInterface } from "../../../util/interfaces";
import UploadPreview from "./UploadPreview";
import UploadInputBox from "./UploadInputBox";
import UploadProgress from "./UploadProgress";
import firebase from "firebase/app";
import "firebase/storage";
import close from "../../../images/Icons/close.svg";

const UploadDialog = ({ setUploadState }: UploadDialogInterface) => {
  const firebaseConfig = {
    apiKey: "AIzaSyChCI0lkOdXycjalK4OL8M2EJbb93NBhSY",
    authDomain: "archer-4d1a8.firebaseapp.com",
    databaseURL: "https://archer-4d1a8.firebaseio.com",
    projectId: "archer-4d1a8",
    storageBucket: "archer-4d1a8.appspot.com",
    messagingSenderId: "327515106806",
    appId: "1:327515106806:web:556aeb4081885274a8ebd7",
    measurementId: "G-073RXQYQK0",
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  });

  const [image, setimage] = useState<ImagePreview>();
  const fileRef = useRef<any>(null);
  const [progress, setProgress] = useState<number | null>(null);

  const firebaseUpload = (file: any) => {
    const storage = firebase.storage();
    let uploadTask = storage.ref().child(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshort: any) => {
        const progress = Math.round((snapshort.bytesTransferred / snapshort.totalBytes) * 100);
        setProgress(progress);
        if (progress === 100) {
          setProgress(null);
        }
        console.log(progress);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleFilePreview = (file: any) => {
    console.log(file);
    let fileType = file?.type;
    let validFileExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validFileExtensions.includes(fileType)) {
      setProgress(10);
      firebaseUpload(file);
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileUrl: any = fileReader.result;
        setimage(fileUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleChoosenFile = (e: any) => {
    const file = e.target.files[0];
    handleFilePreview(file);
  };

  const handleUploadEvent = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleFileDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFilePreview(file);
  };

  return (
    <>
      <div className="uploadDialog" onClick={(e) => setUploadState(false)}>
        <div className="dialog" onClick={(e) => e.stopPropagation()}>
          <h2>Upload Your Story</h2>
          <p>File Should be Jpg, JPEG, PNG</p>

          <img src={close} alt="" className="closeDialog" onClick={(e) => setUploadState(false)} />

          {image ? (
            <UploadPreview image={image} setimage={setimage} progress={progress} setProgress={setProgress} />
          ) : (
            <UploadInputBox
              handleUploadEvent={handleUploadEvent}
              handleFileDrop={handleFileDrop}
              handleDragOver={handleDragOver}
              fileRef={fileRef}
              handleChoosenFile={handleChoosenFile}
              fileUpload={fileUpload}
            />
          )}

          {/* <UploadProgress progress={progress} /> */}
          {progress && <UploadProgress progress={progress} />}
        </div>
      </div>
    </>
  );
};

export default UploadDialog;
