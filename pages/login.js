import AuthDetails from '@/components/AuthDetails'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import React from 'react'

const Login = () => {
  return (
    <>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </>
  )
}

export default Login
