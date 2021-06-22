import googleIcon from "../../../images/Icons/GoogleIcon.svg";
import "./LoginButton.css";
import firebase from "../../../util/firebase.config";
import { useToggleEvents } from "../../../App";

const LoginButton = () => {
	const { setUser } = useToggleEvents();

	const googleAuth = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result: any) => {
				console.log(result);
				const userInfo = {
					name: result.user.displayName,
					username: result.user.email.split("@")[0],
					email: result.user.email,
					photo: result.user.photoURL.replace("s96-c", "s500-c"),
				};
				setUser(userInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className='googleLoginBtn' onClick={() => googleAuth()}>
				<img src={googleIcon} alt='' />
				<h3>Login with Google</h3>
			</div>
			<p className='warning'>
				We are not storing any of your data, so you have to login everytime for Creating Notes and Stories
			</p>
		</>
	);
};

export default LoginButton;
