// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:            'AIzaSyDsbxK6oUeXUyZyVqHCchEAaaOPNLksi10',
	authDomain:        'react-course-686a6.firebaseapp.com',
	projectId:         'react-course-686a6',
	storageBucket:     'react-course-686a6.appspot.com',
	messagingSenderId: '362769772562',
	appId:             '1:362769772562:web:31c149d646f8c08953e8cb'
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);
const FirebaseDB = getFirestore(FirebaseApp);

export {FirebaseApp, FirebaseAuth, FirebaseDB};