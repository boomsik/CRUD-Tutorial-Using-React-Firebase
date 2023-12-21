import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB6FCCVUO-4UgnMTMi9msIZ6LKA_6Exlw8",
    authDomain: "crud-tutorial-cff41.firebaseapp.com",
    projectId: "crud-tutorial-cff41",
    storageBucket: "crud-tutorial-cff41.appspot.com",
    messagingSenderId: "564635003945",
    appId: "1:564635003945:web:a9fcf4bf5fa88d89e38038",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
