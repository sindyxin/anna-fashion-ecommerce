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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
