import "./NavHeader.css";
import logo from "../../../images/logoLow.png";
import animaton from "./62139-hamburger.json";
import Lottie from "lottie-react-web";
import React from "react";
import { useToggleEvents } from "../../../App";

const NavHeader = () => {
  const { toggle, setToggle } = useToggleEvents();

  return (
    <>
      <nav>
        <div className="brand">
          <img src={logo} alt="Logo" />
          <h1>Work Flow</h1>
        </div>
        <div className="hamBurger" onClick={() => setToggle(!toggle)}>
          <Lottie
            segments={toggle ? [0, 20] : [20, 40]}
            options={{
              animationData: animaton,
              loop: false,
              autoplay: false,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavHeader;
