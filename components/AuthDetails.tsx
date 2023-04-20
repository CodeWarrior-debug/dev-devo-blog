import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../lib/firesStoreRef";

//Thanks to judygab for her project at: https://github.com/judygab/web-dev-projects-2/tree/react-firebase-auth/react-firebase-auth
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        
        

      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear()
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <h1>{`Signed In as ${authUser.email}`}</h1>
          <br/>
          <button onClick={userSignOut} className="bg-dark text-white" >Sign Out</button>
        </>
      ) : (
        <h1 className="bg-white text-dark fw-bold">Currently Signed Out</h1>
      )}
    </div>
  );
};

export default AuthDetails;