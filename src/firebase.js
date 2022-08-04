// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZkADNsFSIQjVPnbUntzoefqTy3eRZqrc",
    authDomain: "slack-clone-bb412.firebaseapp.com",
//    databaseURL: "https://slack-clone-bb412.firebaseio.com",
    projectId: "slack-clone-bb412",
    storageBucket: "slack-clone-bb412.appspot.com",
    messagingSenderId: "346681388162",
    appId: "1:346681388162:web:a141418a6581925d0ed89b",
    measurementId: "G-MSBJNM2GM9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;