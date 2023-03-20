import React from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import { nameState, charState} from '../recoil/States'

const Input = () => {

    const [name, setName] = useRecoilState(nameState);
    const nameLength=useRecoilValue(charState);


  return (
    <>
    <h2>{name}</h2>
      <div>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <h3>My name length is: {nameLength}</h3>
      </div>
      
    </>
  )
}

export default Input
