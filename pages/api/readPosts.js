// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      let allDocs = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allDocs.push(doc.data());
      });

      allDocs.sort((a, b) => parseInt(a.idNum) - parseInt(b.idNum));

      await json(allDocs);
      res.send(200);

      // console.log("alldocs: ",allDocs)
    };

await getPosts();
  } catch (err) {
    res.json(err);
  }
}
