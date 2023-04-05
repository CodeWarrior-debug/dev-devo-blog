// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firesStoreRef";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  
  
  try {
    const title = req.body.title;
    const postBody = req.body.postBody;
    const subtitle = req.body.subtitle;
    const updateddateTime = req.body.updateddateTime;
    // const author = req.body.author;
    // const createddateTime = req.body.createddateTime;
    // const url = slugify(req.body.title).toLowerCase();
    const idNum = req.body.idNum;
    // const tagsArr = req.body.tagsArr;
    // const commentsArr = req.body.commentsArr;

    const updatedPost = {
      title: title,
      postBody: postBody,
      updateddateTime: updateddateTime,
      subtitle: subtitle,
      // author: author,
      // createddateTime: createddateTime,
      // url: url + "-" + idNum,
      idNum: idNum,
      // tagsArr: tagsArr,
      // commentsArr: commentsArr,
    };

    const updatePost = async () => {
      

      // await setDoc(doc(db, "posts", idNum.toString()), newPost);

   const postRef = doc(db,"posts",updatedPost.idNum.toString())


     setDoc(postRef,{title: "the very very best things"},{merge : true})
// {postBody: updatedPost.postBody},{updateddateTime: updatedPost.updateddateTime},{subtitle: updatedPost.subtitle}
      // const refPostBody = 
      // const refUpdatedTime = 
      // const refSubtitle = 



      // const refTitle = newPost.title
      // const refPostBody = newPost.title
      // const refUpdatedTime = newPost.title
      // const refSubtitle = newPost.title

      // setDoc(refTitle, {title: true}, {merge:true})
      // setDoc(refPostBody, {postBody : true}, {merge:true})
      // setDoc(refUpdatedTime, {updateddateTime: true}, {merge:true})
      // setDoc(refSubtitle, {subtitle: true}, {merge:true})


    };

    updatePost();
  } catch (err) {
    console.log(err);
  }
}
