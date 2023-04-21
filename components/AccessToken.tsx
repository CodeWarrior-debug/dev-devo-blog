import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect } from "react"
export default function AccessToken() {
  const { data } = useSession()


  
  const dataString = JSON.stringify(data)

  useEffect(()=>{

  }, [data])
  

  return (
  <>
    <h2 className="text-center"> &emsp; Access Token: &emsp; &emsp;</h2>
    <br/>
    <p className="w-25"> {dataString}</p>
  </>
  
  )
}