import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";


export default async function handler(req, res) {
  try {
    const getPost = async () => {

      const q = query(
        collection(db, "posts"),
        where("url", "==", req.headers.custompostindex.toString())
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        res.json(doc.data());
        
      });
      
    };

    await getPost();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
}
