import Profile from "./Profile/Profile";
import LoginButton from "./LoginButton/LoginButton";
import NavMenu from "./NavMenu/NavMenu";
import AddNewModal from "./AddNewModal/AddNewModal";

const Sidebar = () => {
  return (
    <>
      <AddNewModal />
      <Profile />
      <LoginButton />
      <NavMenu />
    </>
  );
};

export default Sidebar;
