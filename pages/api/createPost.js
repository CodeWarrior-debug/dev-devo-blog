// import React, { useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import { setDoc, getFirestore, doc } from "firebase/firestore";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const firebaseConfig = {
  apiKey: "AIzaSyBXjSO1dKSAjVYVmcNURaRdpPueZRXoTdU",
  authDomain: "dev-blog-b9b09.firebaseapp.com",
  projectId: "dev-blog-b9b09",
  storageBucket: "dev-blog-b9b09.appspot.com",
  messagingSenderId: "452713926371",
  appId: "1:452713926371:web:67a68e3b801903c133bfd6",
  measurementId: "G-KBC14G3NMK",
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function handler(req,res){
  
  // import { Post} from "./objectDefs"
  
  // import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  try{
    const addPost = async () => {
      // constructor(title,post,author,createddateTime, updateddateTime,subtitle,url,idNum,tagsArr,commentsArr){

         
      await setDoc(doc(db, "posts","3"), {
        title: "The best topics",
        post: "You know what they are! God and good books!",
        author: "James",
        createddateTime: "99/99/12 02:02",
        updateddateTime: new Date(),
        subtitle: "You can't wait to hear just how good these topics are...",
        url: "/the_best_topics_2",
        idNum: 2,
        tagsArr: ["theology", "literature"],
        commentsArr: ["great God almighty", "i hate emerson"],
      });
  
  
  
  
      // await addDoc(doc(db,"posts",2),{
      //   title, post, author, createddateTime, updateddateTime, subtitle, url, idNum, tagsArr, commentsArr
      // })
  
      
    };
  
    
      addPost();
  } catch(err){
    console.log(err)
  }
  

    
    
    res.status(200).json({status:'happy it worked!'})

      
  

  





}