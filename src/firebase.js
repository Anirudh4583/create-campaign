import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAfPSw5DAD-jwpB_hhCSRNJpe9dMKXHiW0',
  authDomain: 'task-e9c7b.firebaseapp.com',
  projectId: 'task-e9c7b',
  storageBucket: 'task-e9c7b.appspot.com',
  messagingSenderId: '80865581109',
  appId: '1:80865581109:web:80596f83fa29e71a42b97c',
  measurementId: 'G-Y4W7FQQVEN',
});

const db = firebaseApp.firestore();

export default db;
