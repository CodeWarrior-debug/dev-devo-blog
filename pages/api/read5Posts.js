// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { query, orderBy, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const getPosts = async () => {
      
      let allDocs = [];

      const postsRef = collection(db, "posts");
      
      // const q = query(postsRef, orderBy("idNum", "desc"), limit(5))
      const q = query(postsRef, limit(5))
      
      const buildPosts = async ()=>{

        const querySnapshot = await getDocs(q);

        console.log(querySnapshot)

         querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          allDocs.push(doc.data());
        }
        );
  
        
      }

      await buildPosts()
      
      console.log("alldocs: ",allDocs)
      // res.json(allDocs)

      res.status(200)
      res.end(allDocs);
      // res.end(JSON.stringify(allDocs));
    };
  
    await getPosts();

  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
