import { ImagePreview } from "../../../util/interfaces";

const UploadPreview = ({ image, setimage }: ImagePreview) => {
  return (
    <>
      <div className="imagePreview">
        <span onClick={() => setimage(null)}>X</span>
        <img src={image} alt="" />
      </div>
    </>
  );
};
export default UploadPreview;
