// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDi-Ytuuk5THOHHgS1CIcPqy7lEefxqF18",
  authDomain: "audiophile-8e80d.firebaseapp.com",
  projectId: "audiophile-8e80d",
  storageBucket: "audiophile-8e80d.appspot.com",
  messagingSenderId: "300325938882",
  appId: "1:300325938882:web:fb3ec0beb95d1af04dfd5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)