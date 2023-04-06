
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState} from "react";
import { auth } from "../lib/firesStoreRef";
import { useRouter } from "next/router";


const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  




  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("userEmail", email);
        router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1 className="font-extrabold text-2xl">Log In to your Account</h1>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-slate-900 rounded p-2 m-4 text-black"
        ></input>
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-slate-900 rounded p-2 m-4 text-black"
        ></input>
        <button type="submit" className="bg-slate-600 text-white h-11 rounded pl-4 pr-4 font-semibold m-2">Log In</button>
        
      </form>
    </div>
  );
};

export default SignIn;
