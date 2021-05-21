import googleIcon from "../../../images/Icons/GoogleIcon.svg";
import "./LoginButton.css";

const LoginButton = () => {
  return (
    <>
      <div className="googleLoginBtn">
        <img src={googleIcon} alt="" />
        <h3>Login with Google</h3>
      </div>
    </>
  );
};

export default LoginButton;
