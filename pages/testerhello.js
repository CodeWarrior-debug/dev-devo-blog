import React, { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=GgzWFxIiwK4&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=42

// TODO research error ---- API resolved without sending a response for /api/readPost, this may result in stalled requests.

const TestPageAPI = () => {
  

  const getData = async () => {
    const response = await fetch("api/hello");
    const data = await response.json();

    console.log(data);

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>check console</h2>

    </>
  );
};

export default TestPageAPI;
