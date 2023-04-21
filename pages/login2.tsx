import LoginButton from '../components/LoginButtton'
import React from 'react'
import AccessToken from '@/components/AccessToken'
import Navbar from '../components/Navbar'


const NextAuth = () => {
  return (
    <>
    <Navbar/>
    <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
          <div className='d-flex flex-row justify-content-center'>

              <LoginButton/>
              <AccessToken/>

          </div>
      </div>
      </div>

    </>
  )
}

export default NextAuth
