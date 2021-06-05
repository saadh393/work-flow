import { UploadInputHandler } from "../../../util/interfaces";

const UploadInputBox = ({
  handleUploadEvent,
  handleFileDrop,
  handleDragOver,
  fileRef,
  handleChoosenFile,
  fileUpload,
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
        <img src={fileUpload} alt="" />
        <p>Choose Your File</p>
      </div>
    </>
  );
};

export default UploadInputBox;
