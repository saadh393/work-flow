import Profile from "./Profile/Profile";
import LoginButton from "./LoginButton/LoginButton";
import NavMenu from "./NavMenu/NavMenu";
import AddNewModal from "./AddNewModal/AddNewModal";
import { useState } from "react";
import { uploadDialogState } from "../../util/interfaces";

const Sidebar = ({ uploadState, setUploadState }: uploadDialogState) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <AddNewModal isVisible={isVisible} setIsVisible={setIsVisible} setUploadState={setUploadState} />
      <Profile />
      <LoginButton />
      <NavMenu
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        uploadState={uploadState}
        setUploadState={setUploadState}
      />
    </>
  );
};

export default Sidebar;
