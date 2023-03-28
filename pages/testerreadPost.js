import React, { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=GgzWFxIiwK4&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=42

// TODO research error ---- API resolved without sending a response for /api/readPost, this may result in stalled requests.

const TestPageAPI = () => {
  const [post, setPost] = useState("");

  const number = 2;

  // const coll = collection(db, "cities");
  // const snapshot = await getCountFromServer(coll);
  // console.log('count: ', snapshot.data().count);

  const getData = async () => {
    const response = await fetch("api/readPost", {
      headers: {
        customPostIndex: number.toString(),
      },
    });
    const data = await response.json();
    setPost(data);
    //  console.log(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>{post.author}</p>
    </>
  );
};

export default TestPageAPI;
