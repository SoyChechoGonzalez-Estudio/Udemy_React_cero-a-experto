import {
	loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle
} from '../../firebase/providers.js';
import {checkingCredentials, login, logout} from './';

const checkingAuthentication = (email, password) => {
	return async(dispatch) => {
		dispatch(checkingCredentials());
	};
};

const startGoogleSignIn = () => {
	return async(dispatch) => {
		
		dispatch(checkingCredentials());
		
		const result = await signInWithGoogle();
		if (!result.ok) return dispatch(logout(result.errorMessage));
		
		dispatch(login(result));
	};
};

const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
	return async(dispatch) => {
		
		dispatch(checkingCredentials());
		
		const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
		if (!ok) return dispatch(logout({errorMessage}));
		
		dispatch(login({uid, displayName, email, photoURL}));
	};
};

const startLoginWithEmailPassword = ({email, password}) => {
	return async(dispatch) => {
		dispatch(checkingCredentials());
		const result = await loginWithEmailPassword({email, password});
		console.log(result);
		
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

const startLogout = () => {
	return async(dispatch) => {
		await logoutFirebase();
		dispatch(logout());
	};
	
};

export {
	checkingAuthentication, startGoogleSignIn, startCreatingUserWithEmailPassword, startLoginWithEmailPassword,
	startLogout
};