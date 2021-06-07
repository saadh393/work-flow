import NavHeader from "./NavHeader/NavHeader";
import Story from "./Story/Story";
import Todos from "./Todos/Todos";
import UploadDialog from "../MainContent/UploadDialog/UploadDialog";
import { uploadDialogState } from "../../util/interfaces";

const MainContent = ({ uploadState, setUploadState }: uploadDialogState) => {
  return (
    <>
      {uploadState && <UploadDialog setUploadState={setUploadState} />}
      <NavHeader />
      <div className="mainContentWrapper">
        <Story />
        <Todos />
      </div>
    </>
  );
};

export default MainContent;
