import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";
import { useToggleEvents } from "../App";
import { useState } from "react";

const Index = () => {
  const { toggle } = useToggleEvents();
  const [uploadState, setUploadState] = useState(false);
  return (
    <>
      <div className="appContainer">
        <div className="navDrawer" style={{ left: !toggle ? "-100%" : "0" }}>
          <Sidebar uploadState={uploadState} setUploadState={setUploadState} />
        </div>
        <div className="mainContent">
          <MainContent uploadState={uploadState} setUploadState={setUploadState} />
        </div>
      </div>
    </>
  );
};

export default Index;
