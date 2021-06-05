/*  
💥 Title : UploadDialog
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 05/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "./UploadDialog.css";
import fileUpload from "../../../images/Icons/file.svg";
import { useRef, useState } from "react";
import { ImagePreview } from "../../../util/interfaces";
import UploadPreview from "./UploadPreview";
import UploadInputBox from "./UploadInputBox";
import UploadProgress from "./UploadProgress";

const UploadDialog = () => {
  const [image, setimage] = useState<ImagePreview>();
  const fileRef = useRef<any>(null);

  const handleFilePreview = (file: any) => {
    let fileType = file?.type;
    let validFileExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validFileExtensions.includes(fileType)) {
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
      <div className="uploadDialog">
        <div className="dialog">
          <h2>Upload Your Story</h2>
          <p>File Should be Jpg, JPEG, PNG</p>

          {image ? (
            <UploadPreview image={image} setimage={setimage} />
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
          <UploadProgress />
        </div>
      </div>
    </>
  );
};

export default UploadDialog;
