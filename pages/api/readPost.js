// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const getPost = async () => {
      const q = query(
        collection(db, "posts"),
        where("url", "==", req.headers.custompostindex.toString())
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        res.statusCode = 200;
        res.end(JSON.stringify(doc.data()));
      });
    };

    await getPost();
  } catch (error) {
    res.json(error);
    res.end(error);
  }
}
