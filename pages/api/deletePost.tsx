import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";
import router from "next/router";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function handler(req:any, res:any) {
  

  try {

    // console.log(req.headers)
    await deleteDoc(doc(db,"posts",req.headers.custompostindex.toString()))
    // console.log("doc deleted")
    res.status(200)
    res.end(JSON.stringify({"WEARE":"DELETED"}))
    

  } catch (error) {
    res.json(error)
    res.status(405).end();
    router.push("/blogs")

    
    
  }
}
