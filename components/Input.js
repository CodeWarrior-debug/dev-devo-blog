import React from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import {  isLoggedIn, userName} from '../recoil/States'

const Input = () => {

    const [name, setName] = useRecoilState(userName);
    const loggedIn=useRecoilValue(isLoggedIn);


  return (
    <>
    <h2>{name}</h2>
      <div>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <h3>My name is: {name}</h3>
        <h3>T or F? I am logged in: {loggedIn}</h3>
      </div>
      
    </>
  )
}

export default Input
