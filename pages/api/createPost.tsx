// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";
import slugify from "slugify";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req:any, res:any) {
  
  
  try {
    const title:string = req.body.title;
    const postBody:string = req.body.postBody;
    const author:string = req.body.author;
    const subtitle:string = req.body.subtitle;
    const createddateTime:string = req.body.createddateTime;
    const updateddateTime:string = req.body.updateddateTime;
    const url:string = slugify(req.body.title).toLowerCase();
    const idNum:string = req.body.idNum;
    const tagsArr:any = [];
    const commentsArr:any = [];
    // const tagsArr = req.body.tagsArr;
    // const commentsArr = req.body.commentsArr;

    const newPost = {
      title: title,
      postBody: postBody,
      author: author,
      createddateTime: createddateTime,
      updateddateTime: updateddateTime,
      subtitle: subtitle,
      url: url + "-" + idNum,
      idNum: idNum,
      tagsArr: tagsArr,
      commentsArr: commentsArr,
    };

    const addPost = async () => {
      
      await setDoc(doc(db, "posts", idNum.toString()), newPost);

    };

    addPost();
  } catch (err) {
    console.log(err);
  }
}
