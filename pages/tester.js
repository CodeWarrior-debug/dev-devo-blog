import React, { useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getCountFromServer,getDocs,getDoc,getFirestore ,collection, addDoc,doc, setDoc, Timestamp, updateDoc, arrayUnion, arrayRemove, increment, deleteDoc} from "firebase/firestore";
import {
  getDocs,
  setDoc,
  getCountFromServer,
  getFirestore,
  collection,
  updateDoc,
  addDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
// import { Post} from "./objectDefs"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId is optional



const TestPage = () => {
  // const coll = collection(db, "cities");
  // const snapshot = await getCountFromServer(coll);
  // console.log('count: ', snapshot.data().count);
  
  const addPost = async () => {
    // constructor(title,post,author,createddateTime, updateddateTime,subtitle,url,idNum,tagsArr,commentsArr){
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

  useEffect(() => {
    addPost();
  }, []);

  return <>
  <p>tryin out...</p>
  </>;
};

export default TestPage;
