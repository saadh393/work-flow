import { UploadInputHandler } from "../../../util/interfaces";
import UploadPreview from "./UploadPreview";

const UploadInputBox = ({
  handleUploadEvent,
  handleFileDrop,
  handleDragOver,
  fileRef,
  handleChoosenFile,
  fileUpload,
  image,
  setimage,
  progress,
  setProgress,
}: UploadInputHandler) => {
  return (
    <>
      <div
        className="uploadInput"
        onClick={handleUploadEvent}
        draggable
        onDrop={(e) => handleFileDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      >
        <input
          type="file"
          ref={fileRef}
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/png"
          onChange={(e) => handleChoosenFile(e)}
        />

        {image ? (
          <UploadPreview image={image} setimage={setimage} progress={progress} setProgress={setProgress} />
        ) : (
          <>
            <img src={fileUpload} alt="" />
            <p>Choose Your File</p>
          </>
        )}
      </div>
    </>
  );
};

export default UploadInputBox;
