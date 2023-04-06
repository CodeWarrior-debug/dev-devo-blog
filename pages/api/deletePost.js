// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {

    console.log(req.headers)
    await deleteDoc(doc(db,"posts",req.headers.custompostindex.toString()))

    console.log("doc deleted")
    res.send(200)


  } catch (err) {
    res.json(err)
    
    
  }
}
