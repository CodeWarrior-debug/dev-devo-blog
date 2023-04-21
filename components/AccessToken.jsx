import { useSession, signIn, signOut } from "next-auth/react"
import React, { useEffect } from "react"
export default function AccessToken() {
  const { data } = useSession()


  const dataString = JSON.stringify(data)

  useEffect(()=>{
    if (data){
      console.log(data)

    }
  }, [data])
  
  // const { accessToken } = data

  // return <div>Access Token: {accessToken}</div>
  return (
  <>
    <div>Access Token: </div>
    <div> {dataString}</div>
  </>
  
  )
}