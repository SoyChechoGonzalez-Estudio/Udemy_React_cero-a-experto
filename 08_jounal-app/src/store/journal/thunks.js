import {collection, doc, setDoc} from 'firebase/firestore/lite';

import {FirebaseDB} from '../../firebase/config.js';
import {addNewEmptyNote, savingNewNote, setActiveNote} from './';


const startNewNote = () => {
	return async(dispatch, getState) => {
		
		dispatch(savingNewNote());
		
		const {uid} = getState().auth;
		
		const newNote = {
			title: '',
			body:  '',
			date:  new Date().getTime(),
		};
		
		const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
		await setDoc(newDoc, newNote);
		
		newNote.id = newDoc.id;
		
		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

const startLoadingNotes = () => {
	return async(dispatch, getState) => {
		const {uid} = getState().auth;
		
		if (!uid) throw new Error('El uid del usuario no existe');
		
		console.log({uid});
	};
};

export {startNewNote, startLoadingNotes};