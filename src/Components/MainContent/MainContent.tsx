import NavHeader from "./NavHeader/NavHeader";
import Story from "./Story/Story";
import Todos from "./Todos/Todos";
import UploadDialog from "../MainContent/UploadDialog/UploadDialog";

const MainContent = () => {
  return (
    <>
      <UploadDialog />
      <NavHeader />
      <div className="mainContentWrapper">
        <Story />
        <Todos />
      </div>
    </>
  );
};

export default MainContent;
