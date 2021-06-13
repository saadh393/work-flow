import Profile from "./Profile/Profile";
import LoginButton from "./LoginButton/LoginButton";
import NavMenu from "./NavMenu/NavMenu";
import AddNewModal from "./AddNewModal/AddNewModal";
import { useState } from "react";
import { uploadDialogState } from "../../util/interfaces";
import { useToggleEvents } from "../../App";

const Sidebar = ({ uploadState, setUploadState }: uploadDialogState) => {
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useToggleEvents();

  return (
    <>
      <AddNewModal isVisible={isVisible} setIsVisible={setIsVisible} setUploadState={setUploadState} />
      <Profile />
      {!user.photo && <LoginButton />}

      {user.photo && (
        <NavMenu
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          uploadState={uploadState}
          setUploadState={setUploadState}
        />
      )}
    </>
  );
};

export default Sidebar;
