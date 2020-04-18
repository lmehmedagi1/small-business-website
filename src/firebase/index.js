import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC8DqFDVz-d6k4d4MMKungURvsKrZA8OBg",
    authDomain: "facit-back.firebaseapp.com",
    databaseURL: "https://facit-back.firebaseio.com",
    projectId: "facit-back",
    storageBucket: "facit-back.appspot.com",
    messagingSenderId: "754469960245"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}