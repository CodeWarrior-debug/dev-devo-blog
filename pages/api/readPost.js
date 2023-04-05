// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { doc, getDoc, where, query } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {

    const getPost = async () => {
      // TODO - make dynamic
      
      // console.log("desired value: ", req.headers.custompostindex)

      const docRef = doc(db, "posts", req.headers.custompostindex.toString());
      const docSnap = await getDoc(docRef);
      // try{
        if (docSnap.exists()) {
        res.status(200).json(docSnap.data());
        // res.end()
      } else {
        console.log("NO DOC BRO!!!");
      }
    }
      // } catch (err){
      //   res.status(500).json({ error: 'failed to load data' })

      // }
        
        
        
        // console.log("document data", docSnap.data());
    // };

     getPost();
  } catch (err) {
    console.log(err);
  }
  
}
