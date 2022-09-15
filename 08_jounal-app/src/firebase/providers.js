import {
	signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
	updateProfile
} from 'firebase/auth';
import {FirebaseAuth} from './config.js';

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
	
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);
		const {displayName, email, photoURL, uid} = result.user;
		
		return {
			ok: true,
			// UserInfo
			displayName,
			email,
			photoURL,
			uid,
		};
		
		
	} catch (error) {
		
		const errorCode = error.code;
		const errorMessage = error.message;
		
		return {
			ok: false,
			errorMessage,
		};
	}
};

const registerUserWithEmailPassword = async({email, password, displayName}) => {
	try {
		console.log({email, password, displayName});
		const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
		const {uid, photoURL} = response.user;
		await updateProfile(FirebaseAuth.currentUser, {displayName});
		
		return {
			ok: true,
			uid, photoURL, email, displayName
		};
		
	} catch (error) {
		console.log(error);
		return {ok: false, errorMessage: error.message};
	}
};

const loginWithEmailPassword = async({email, password}) => {
	
	try {
		const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
		const {uid, photoURL, displayName} = response.user;
		return {
			ok: true,
			uid, photoURL, displayName
		};
		
		
	} catch (error) {
		return {ok: false, errorMessage: error.message};
	}
};

const logoutFirebase = async() => {
	return await FirebaseAuth.signOut();
};

export {signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase};