// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {

    
    const getPosts = async () => {

      const querySnapshot = await getDocs(collection(db, "posts"));

      let allDocs = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allDocs.push(doc.data())
      });

      
      res.status(200).json(allDocs)
      


      // console.log("alldocs: ",allDocs)
    };

    getPosts();

  } catch (err) {
    res.json(err)
    
    
  }
}
