import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCOA644W3wTVcq93Uf3SJr4gQ5ZghnYQIk",
    authDomain: "guess-the-score-37822.firebaseapp.com",
    projectId: "guess-the-score-37822",
    storageBucket: "guess-the-score-37822.appspot.com",
    messagingSenderId: "522212417349",
    appId: "1:522212417349:web:809a01b6903e1d0d8ba82c",
    measurementId: "G-6WGB6WFWEC"
}
firebase.initializeApp(config);

export default firebase;