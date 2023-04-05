import {doc, updateDoc} from "firebase/firestore"
import { db } from "@/lib/firesStoreRef"


export default async function handler(req, res) {

    const postRef = doc(db,"posts",req.body.idNum.toString())

    

    await updateDoc(postRef, {
        title: req.body.title,
        // idNum:req.body.idNum,
        // postBody:req.body.content,
        // subtitle:req.body.subtitle,
        // updateddateTime: new Date().toDateString(),
      });

    res.status(200).json({ message: 'post successful' })
  }