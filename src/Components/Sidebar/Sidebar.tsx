import Profile from "./Profile/Profile";
import LoginButton from "./LoginButton/LoginButton";
import NavMenu from "./NavMenu/NavMenu";
import AddNewModal from "./AddNewModal/AddNewModal";
import { useState } from "react";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <AddNewModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <Profile />
      <LoginButton />
      <NavMenu isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
};

export default Sidebar;
