import React, { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=GgzWFxIiwK4&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=42

// TODO research error ---- API resolved without sending a response for /api/readPost, this may result in stalled requests.

const TestPageAPI = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch("api/readPosts");
    const data = await response.json();

    const processPosts = async () => {
      setPosts(data);
      // console.log(posts[0])
    };

    processPosts();

    // console.log(posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Posts here</h2>
      <ul>
      {posts.map((post)=>{
        return <li key={post.url}>
          {post.author}
        </li>
      })
    }
      </ul>
    </>
  );
};

export default TestPageAPI;
