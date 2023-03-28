// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {

    const getPost = async () => {
      // TODO - make dynamic
      const docRef = doc(db, "posts", "1");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        res.status(200).json(docSnap.data());
        // console.log("document data", docSnap.data());
      } else {
        console.log("NO DOC BRO!!!");
      }
    };

    getPost();
  } catch (err) {
    console.log(err);
  }
  
}
