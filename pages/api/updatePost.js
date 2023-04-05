import {doc, updateDoc} from "firebase/firestore"
import { db } from "@/lib/firesStoreRef"


export default async function handler(req, res) {

    const postRef = doc(db,"posts",req.headers.custompostindex)

    await updateDoc(postRef, { title: req.body.title });
    await updateDoc(postRef, { postBody:req.body.postBody });
    await updateDoc(postRef, { subtitle:req.body.subtitle });
    await updateDoc(postRef, { updateddateTime: new Date().toDateString(), });
    
    
    // subtitle:req.body.subtitle,
    // updateddateTime: new Date().toDateString(),
    res.status(200).json({ message: 'post successful' })
  }