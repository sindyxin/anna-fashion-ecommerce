import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import { config } from '../config.js';

const firebaseConfig = {
	apiKey: config['firebaseConfig']['apiKey'],
	authDomain: config['firebaseConfig']['authDomain'],
	databaseURL: config['firebaseConfig']['databaseURL'],
	projectId: config['firebaseConfig']['projectId'],
	storageBucket: config['firebaseConfig']['storageBucket'],
	messagingSenderId: config['firebaseConfig']['messagingSenderId'],
	appId: config['firebaseConfig']['appId'],
	measurementId: config['firebaseConfig']['measurementId']
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
