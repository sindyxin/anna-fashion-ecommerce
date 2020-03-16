import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('QrGLkkyJxPVfr192slH7')
	.collection('carItems')
	.doc('bMm6lGXcEjxa3OnOpnk9');

firestore.doc('/users/QrGLkkyJxPVfr192slH7/carItems/bMm6lGXcEjxa3OnOpnk9');
firestore.collection('/users/QrGLkkyJxPVfr192slH7/carItems');
