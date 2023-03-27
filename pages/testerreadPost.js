import React, { useEffect, useState } from "react";



// https://www.youtube.com/watch?v=GgzWFxIiwK4&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=42




const TestPageAPI = () => {

  const [post, setPost] = useState('');
  // const coll = collection(db, "cities");
  // const snapshot = await getCountFromServer(coll);
  // console.log('count: ', snapshot.data().count);


  
  const getData = async ()=>{
     const response = await fetch('api/readPost')
     const data = await response.json()
     setPost(data)
    //  console.log(data)
  }
  
  


  useEffect(() => {


    getData()
  }, []);

  return <>
  <p>{post.post}</p>
  </>;
};

export default TestPageAPI;
