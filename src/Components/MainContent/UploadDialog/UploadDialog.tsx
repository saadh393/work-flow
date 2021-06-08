/*  
💥 Title : UploadDialog
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 05/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "firebase/storage";
import "./UploadDialog.css";
import { useRef, useState } from "react";
import UploadPreview from "./UploadPreview";
import UploadInputBox from "./UploadInputBox";
import UploadProgress from "./UploadProgress";
import close from "../../../images/Icons/close.svg";
import fileUpload from "../../../images/Icons/file.svg";
import { ImagePreview, UploadDialogInterface } from "../../../util/interfaces";
import { handleChoosenFile, handleDragOver, handleFileDrop, handleUploadEvent } from "../../../handlers/UploadHandler";

const UploadDialog = ({ setUploadState }: UploadDialogInterface) => {
  const [image, setimage] = useState<ImagePreview>();
  const fileRef = useRef<any>(null);
  const [progress, setProgress] = useState<number | null>(null);

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
              handleUploadEvent={() => handleUploadEvent(fileRef)}
              handleFileDrop={(e) => handleFileDrop(e, setimage, setProgress)}
              handleDragOver={handleDragOver}
              fileRef={fileRef}
              handleChoosenFile={(e) => handleChoosenFile(e, setimage, setProgress)}
              fileUpload={fileUpload}
            />
          )}

          {progress && <UploadProgress progress={progress} />}
        </div>
      </div>
    </>
  );
};

export default UploadDialog;
