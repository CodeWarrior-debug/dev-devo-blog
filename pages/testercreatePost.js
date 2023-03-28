import React, { useEffect } from "react";

// https://medium.com/meta-box/how-to-send-get-and-post-requests-with-javascript-fetch-api-d0685b7ee6ed
const params = {
  title: "The best topics",
  postBody: "You know what they are! God and good books!",
  author: "James",
  createddateTime: new Date(),
  updateddateTime: new Date(),
  subtitle: "You can't wait to hear just how good these topics are...",
  idNum: 1,
  tagsArr: ["theology", "literature"],
  commentsArr: ["great God almighty", "i hate emerson"],
};

const options = {
  method: "POST",
  body: JSON.stringify(params),
  headers: {
    "Content-Type": "application/json",
  },
};

const TestPageAPI = () => {
  // const coll = collection(db, "cities");
  // const snapshot = await getCountFromServer(coll);
  // console.log('count: ', snapshot.data().count);

  const getData = async () => {
    const response = await fetch("api/createPost", options);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>tryin out...</p>
    </>
  );
};

export default TestPageAPI;
