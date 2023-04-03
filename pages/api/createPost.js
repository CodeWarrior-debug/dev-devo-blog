// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { setDoc, doc, getCountFromServer } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";
import slugify from "slugify";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  
  try {
    const title = req.body.title;
    const postBody = req.body.postBody;
    const author = req.body.author;
    const subtitle = req.body.subtitle;
    const createddateTime = req.body.createddateTime;
    const updateddateTime = req.body.updateddateTime;
    const url = slugify(req.body.title).toLowerCase();
    const idNum = req.body.idNum;
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
      // tagsArr: tagsArr,
      // commentsArr: commentsArr,
    };

    const addPost = async () => {
      

      await setDoc(doc(db, "posts", idNum.toString()), newPost);


    };

    addPost();
  } catch (err) {
    console.log(err);
  }
}
