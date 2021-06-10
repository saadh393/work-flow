import { useEffect, useState } from "react";
import CardStory from "./CardStory";
import OwnStory from "./OwnStory";
import "./Story.css";
import { scrollStories, SliderGrab } from "../../../util/util";

import { database } from "../../../util/firebase.config";

const Story = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    scrollStories();
    SliderGrab();
    const postRef = database.ref("/stories/");
    postRef.on(
      "value",
      (snapshot) => {
        console.log(Object.values(snapshot.val()));
        setStories(Object.values(snapshot.val()));
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }, []);

  return (
    <>
      <h2>Share your Experience</h2>
      <div className="card-wrapper">
        <OwnStory />
        {stories.length && stories.map((story) => <CardStory story={story} />)}
      </div>
    </>
  );
};

export default Story;
