
import {getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { app } from "../lib/firesStoreRef";
import { useRouter } from "next/router";


// TODO clean out tailwind

const SignIn = () => {
  
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    
    
  useEffect(()=>{
    if (localStorage.getItem("userEmail")){
      setEmail(localStorage.getItem("userEmail"))
    }
  },[email])


  const signIn = async () => {
    // e.preventDefault();
    // console.log(auth,email,password)
    const auth = getAuth(app)
    // console.log(JSON.stringify(auth))
    // window.alert( + email + password)
    // localStorage.setItem("userEmail", email);
    
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
      // .then((userCredential) => {
        console.log("complete")
        // console.log(userCredential)
      })
      .catch((error) => {
        const errorCode=error.code;
        const errorMessage = error.message;
        const errorResponse = error.response;
        window.alert("ERR CODE: " + errorCode + errorMessage+ errorResponse  )
        // window.alert("ERR CODE: " + errorCode + errorMessage+ errorResponse + errorPrefix )
      });
    

      
      // router.push('/blogs')



  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1 className="fw-bold text-2xl">Log In to your Account</h1>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-dark rounded p-2 m-4 text-black"
        ></input>
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-dark rounded p-2 m-4 text-black"
        ></input>
        <button type="submit" className="bg-dark text-white h-11 rounded pl-4 pr-4 fw-semibold m-2">Log In</button>
        
      </form>
    </div>
  );
};

export default SignIn;
