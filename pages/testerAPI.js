import React, { useEffect } from "react";



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
