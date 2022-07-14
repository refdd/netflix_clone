// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCt0RKw91sf0JQfqlVUaCsa1qsmRTlrs0E",
    authDomain: "netflix-72ec0.firebaseapp.com",
    projectId: "netflix-72ec0",
    storageBucket: "netflix-72ec0.appspot.com",
    messagingSenderId: "911491886450",
    appId: "1:911491886450:web:e7178ff095d6b4820e41eb",
    measurementId: "G-V7R2D4VR38"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }