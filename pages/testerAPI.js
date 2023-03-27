import React, { useEffect } from "react";


const title= "The best topics";
const post= "You know what they are! God and good books!";
const author= "James";
const createddateTime= "99/99/12 02=02";
const updateddateTime= new Date();
const   subtitle= "You can't wait to hear just how good these topics are...";
const url= "/the_best_topics_2";
const idNum= 2;
const tagsArr= ["theology", "literature"];
const commentsArr= ["great God almighty", "i hate emerson"];


const TestPageAPI = () => {
  // const coll = collection(db, "cities");
  // const snapshot = await getCountFromServer(coll);
  // console.log('count: ', snapshot.data().count);


  
  const getData = async ()=>{
     const response = await fetch('api/createPost')
     const data = await response.json()
     console.log(data)
  }
  
  useEffect(() => {
    getData()
  }, []);

  return <>
  <p>tryin out...</p>
  </>;
};

export default TestPageAPI;
