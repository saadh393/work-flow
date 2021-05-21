import Sidebar from "../Components/Sidebar/Sidebar";
import MainContent from "../Components/MainContent/MainContent";
import { useToggleEvents } from "../App";

const Index = () => {
  const { toggle } = useToggleEvents();
  return (
    <>
      <div className="appContainer">
        <div className="navDrawer" style={{ left: !toggle ? "-100%" : "0" }}>
          <Sidebar />
        </div>
        <div className="mainContent">
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Index;
