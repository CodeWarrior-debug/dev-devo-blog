// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { collection, doc, getDoc, where, query,getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {

    const getPost = async () => {
      // TODO - make dynamic
      
      
      
      const q=query(collection(db,"posts"), where("url" ,"==",req.headers.custompostindex.toString()))

      

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        res.status(200).json(doc.data())
      })



      // const docSnap = await getDoc(docRef);
      // // try{
      //   if (docSnap.exists()) {
      //   res.status(200).json(docSnap.data());
      //   // res.end()
      // } else {
      //   console.log("NO DOC BRO!!!");
      // }
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
