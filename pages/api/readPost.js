<<<<<<< HEAD
=======
// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
>>>>>>> delete3
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";


export default async function handler(req, res) {
  try {
    const getPost = async () => {
<<<<<<< HEAD

=======
>>>>>>> delete3
      const q = query(
        collection(db, "posts"),
        where("url", "==", req.headers.custompostindex.toString())
      );

      const querySnapshot = await getDocs(q);
<<<<<<< HEAD
      querySnapshot.forEach((doc) => {
        res.json(doc.data());
        
      });
      
    };

    await getPost();
  } catch (err) {
    console.log(err);
    res.send(err);
=======

      querySnapshot.forEach((doc) => {
        res.statusCode = 200;
        res.end(JSON.stringify(doc.data()));
      });
    };

    await getPost();
  } catch (error) {
    res.json(error);
    res.end(error);
>>>>>>> delete3
  }
}
