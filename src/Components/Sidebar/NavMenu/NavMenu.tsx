import { ModalVisibility } from "../../../util/interfaces";
import "./NavMenu.css";

const NavMenu = ({ isVisible, setIsVisible, uploadState, setUploadState }: ModalVisibility) => {
  return (
    <>
      <ul className='navMenu'>
        <li onClick={() => setIsVisible(!isVisible)}>Create Note</li>
        <li onClick={() => setUploadState(true)}>New Story</li>
      </ul>
    </>
  );
};

export default NavMenu;
