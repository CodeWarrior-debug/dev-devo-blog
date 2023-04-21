import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
       
       <h2>Signed in as {session.user.name} &emsp; </h2> <br />
        <button  className="btn btn-warning btn-lg" onClick={() => signOut()}>SIGN OUT</button>
      </>
    )
  }
  return (
    <>
     <h2>Not signed in &emsp; </h2> <br /> 
      <button className="btn btn-primary btn-lg" onClick={() => signIn()}>SIGN IN </button>
    </>
  )
}