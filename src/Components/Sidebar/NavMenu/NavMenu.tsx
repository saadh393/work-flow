import { ModalVisibility } from "../../../util/interfaces";
import "./NavMenu.css";

const NavMenu = ({ isVisible, setIsVisible, uploadState, setUploadState }: ModalVisibility) => {
  return (
    <>
      <ul className="navMenu">
        <li onClick={() => setIsVisible(!isVisible)}>Add New Note</li>
        <li onClick={() => setUploadState(true)}>Add New Story</li>
        <li>Add New Note</li>
      </ul>
    </>
  );
};

export default NavMenu;
