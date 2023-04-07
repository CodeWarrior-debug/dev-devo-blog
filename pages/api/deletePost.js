import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

<<<<<<< HEAD
=======
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


>>>>>>> delete3
export default async function handler(req, res) {
  

  try {
<<<<<<< HEAD
    await deleteDoc(doc(db, "posts", req.headers.custompostindex.toString()));
    res.send(200);
  } catch (err) {
    res.json(err);
=======

    // console.log(req.headers)
    await deleteDoc(doc(db,"posts",req.headers.custompostindex.toString()))
    // console.log("doc deleted")
    res.status(200)
    res.end(JSON.stringify({"WEARE":"DELETED"}))
    

  } catch (error) {
    res.json(error)
    res.status(405).end();
    router.push("/blogs")

    
    
>>>>>>> delete3
  }
}
