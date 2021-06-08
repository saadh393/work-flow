import { Story } from "../../../util/interfaces";
import "./Story.css";

const CardStory = ({ story }: Story) => {
  return (
    <>
      <div className="story-card">
        <img src={story.url} alt="" />
        <div className="userInfo">
          <p>@{story.userName}</p>
        </div>
      </div>
    </>
  );
};

export default CardStory;
