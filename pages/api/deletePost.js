// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {

    // const docRef = doc(db, "posts", req.headers.custompostindex.toString());


      db.collection("posts").doc(req.headers.custompostindex.toString()).delete.then(()=>
      {
        console.log("# ",req.headers.custompostindex.toString() ," doc successfully deleted")
      })

    


  } catch (err) {
    res.json(err)
    
    
  }
}
