import { useToggleEvents } from "../../../App";
import profilePic from "../../../images/profilePic.png";
import "./Profile.css";

const Profile = () => {
  const { user } = useToggleEvents();

  return (
    <>
      <div className='profilePicture'>
        {user.photo ? <img src={user.photo} alt={user.name} /> : <img src={profilePic} alt={user.name} />}
      </div>
      <h1 className='profileUsername'>{user.name}</h1>
    </>
  );
};

export default Profile;
