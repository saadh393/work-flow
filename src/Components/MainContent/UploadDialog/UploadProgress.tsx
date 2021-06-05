import imageFile from "../../../images/Icons/file.svg";
// import check from "../../../images/Icons/check.svg";
import close from "../../../images/Icons/close.svg";

const UploadProgress = () => {
  return (
    <div className="uploadProgress">
      <img src={imageFile} alt="" />
      <div className="titleProgress ">
        <h4>File Name</h4>
        <div className="progress"></div>
      </div>
      <div className="closeBtn">
        <img src={close} alt="close" />
        {/* <img src={check} /> */}
      </div>
    </div>
  );
};
export default UploadProgress;
