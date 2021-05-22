import { useEffect } from "react";
import CardStory from "./CardStory";
import OwnStory from "./OwnStory";
import "./Story.css";
import { scrollStories, SliderGrab } from "../../../util/util";

const Story = () => {
  useEffect(() => {
    scrollStories();
    SliderGrab();
  }, []);

  return (
    <>
      <h2>Share your Experience</h2>
      <div className="card-wrapper">
        <OwnStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
        <CardStory />
      </div>
    </>
  );
};

export default Story;
