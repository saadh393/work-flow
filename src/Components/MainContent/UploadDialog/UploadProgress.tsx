import imageFile from "../../../images/Icons/file.svg";
import check from "../../../images/Icons/check.svg";
// import close from "../../../images/Icons/close.svg";

interface progress {
  progress?: number | null;
}

const UploadProgress = ({ progress }: progress) => {
  return (
    <div className="uploadProgress">
      <img src={imageFile} alt="" />
      <div className="titleProgress ">
        <h4>Uploading...</h4>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="closeBtn">
        {/* <img src={close} alt="close" /> */}
        {progress === 100 && <img src={check} className="successUpload" alt="Success" />}
      </div>
    </div>
  );
};
export default UploadProgress;
