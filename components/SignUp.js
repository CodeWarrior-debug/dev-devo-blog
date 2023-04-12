import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {doc, setDoc, getFirestore,Timestamp} from "firebase/firestore"
import React, { useEffect, useState } from "react";
import {auth, firebaseConfig} from "../lib/firesStoreRef"
import { useRouter } from "next/router";
// import { AuthContext } from "../lib/context";

const SignUp = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authEmail, setAuthEmail] = useState("")
  const router = useRouter()
  // const user = useContext(AuthContext)

  useEffect(()=>{
    if (localStorage.getItem("userEmail")){
      setEmail(localStorage.getItem("userEmail"))
    }

  },[email])



  const signUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setAuthEmail(email)
      })
      .catch((error) => {
        console.log(error);
      });

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    

      const setUpUser = async () =>{
  
        e.preventDefault();
        const userRef = doc(db, 'users', email);
        await setDoc(userRef, { updated: Timestamp.fromDate(new Date()) }, { merge: true });
        localStorage.setItem("userEmail", email);
        router.push('/blogs')
      }

      setUpUser();

  };

  return (
    <div>
      <form onSubmit={signUp}>
        <h1 className="fw-bold text-2xl">Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 text-black border-dark rounded p-2 m-4"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 text-black border-dark rounded p-2 m-4"
        ></input>
        <button type="submit" className="bg-dark text-white h-11 rounded pl-4 pr-4 fw-semibold m-2 ">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;