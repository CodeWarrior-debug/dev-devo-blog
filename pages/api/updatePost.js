import { doc, updateDoc, where } from "firebase/firestore";
import { db } from "@/lib/firesStoreRef";

export default async function handler(req, res) {

  try{

    const updateIt = async ()=>{

      const splitter = req.headers.custompostindex.toString().split("-");
      const idNum = splitter[splitter.length - 1];
      const postRef = doc(db, "posts", idNum);
    
      await updateDoc(postRef, { title: req.body.title });
      await updateDoc(postRef, { postBody: req.body.postBody });
      await updateDoc(postRef, { subtitle: req.body.subtitle });
      await updateDoc(postRef, { updateddateTime: new Date().toDateString() });
    
      res.statusCode(200)
      res.end(JSON.stringify({"we_are":"done"}))

    }

    await updateIt()

  } catch (error){

    res.json(error);
    res.status(405).end();
  }
  
}
