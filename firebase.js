// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    addDoc,
    collection,
    onSnapshot
  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjQqhOynpOatJ4m6SuRwldoGlbQWjhctE",
    authDomain: "my-club-web.firebaseapp.com",
    projectId: "my-club-web",
    storageBucket: "my-club-web.firebasestorage.app",
    messagingSenderId: "1030873619171",
    appId: "1:1030873619171:web:c467720e313649a25d43d6",
    measurementId: "G-JDD0NNNDF1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    db,
    auth,
    doc,
    getDoc,
    setDoc,
    addDoc,
    collection,
    onSnapshot
  };

