import React from 'react'
import { useRecoilValue } from 'recoil'
import {  isLoggedIn, userName} from '../recoil/States'

const InputTwo = () => {

    
    const name = useRecoilValue(userName);
    const loggedIn=useRecoilValue(isLoggedIn);


  return (
    <>
    <h2>{name}</h2>
      <div>
        
        <h3>My name is---a second time!!: {name}</h3>
        <h3>T or F? I am logged in: {loggedIn.toString()}</h3>
      </div>
      
    </>
  )
}

export default InputTwo
