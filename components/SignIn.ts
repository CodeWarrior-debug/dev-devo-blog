
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { auth } from "../lib/firesStoreRef";
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
    localStorage.setItem("userEmail", email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error);
      });

      
      router.push('/blogs')



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
