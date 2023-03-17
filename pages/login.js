import React from 'react'
import { nameState } from '@/components/States'
import { useRecoilValue } from 'recoil'

const Login = () => {
  const myName = useRecoilValue(nameState)

  return (
    <>

      <h2>Placeholder {myName}</h2>
    </>
  )
}

export default Login
