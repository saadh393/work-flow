import profilePic from "../../../images/profilePic.png";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profilePicture">
        <img src={profilePic} />
      </div>
      <h1 className="profileUsername">Annonymous</h1>
    </>
  );
};

export default Profile;
