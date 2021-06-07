import { ImagePreview } from "../../../util/interfaces";

const UploadPreview = ({ image, setimage, progress, setProgress }: ImagePreview) => {
  const handleCancelImage = () => {
    setimage(null);
    setProgress(null);
  };
  return (
    <>
      <div className="imagePreview">
        {progress !== 100 && <span onClick={handleCancelImage}>X</span>}
        <img src={image} alt="" />
      </div>
    </>
  );
};
export default UploadPreview;
