import AuthDetails from '../components/AuthDetails'
import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import React from 'react'
import {auth} from '../lib/firesStoreRef'
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

export const GoogleSignInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};

const Login = () => {


  return (
    <>
    <Navbar/>
    <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
      



      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      </div>
      </div>
    </>
  )
}

export default Login
