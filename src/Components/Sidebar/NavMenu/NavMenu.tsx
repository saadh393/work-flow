import { ModalVisibility } from "../../../util/interfaces";
import "./NavMenu.css";

const NavMenu = ({ isVisible, setIsVisible }: ModalVisibility) => {
  return (
    <>
      <ul className="navMenu">
        <li onClick={() => setIsVisible(!isVisible)}>Add New Note</li>
        <li>Add New Note</li>
        <li>Add New Note</li>
      </ul>
    </>
  );
};

export default NavMenu;
