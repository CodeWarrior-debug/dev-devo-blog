
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
import {getAnalytics} from "firebase/analytics"

// import { Post} from "./objectDefs"

// import { getAnalytics, logEvent } from "firebase/analytics";


// Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyBXjSO1dKSAjVYVmcNURaRdpPueZRXoTdU",
  authDomain: "dev-blog-b9b09.firebaseapp.com",
  projectId: "dev-blog-b9b09",
  storageBucket: "dev-blog-b9b09.appspot.com",
  messagingSenderId: "452713926371",
  appId: "1:452713926371:web:67a68e3b801903c133bfd6",
  measurementId: "G-KBC14G3NMK"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

// export const analytics = getAnalytics(app)


// logEvent(analytics,'page_view')