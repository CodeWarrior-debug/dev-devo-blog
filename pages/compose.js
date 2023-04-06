import slugify from "slugify";
import Link from "next/link";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { db } from "@/lib/firesStoreRef";
import { getCountFromServer, collection } from "firebase/firestore";


// title,post,author,date,subtitle,url,idNum,tagsArr,commentsArr

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Compose() {

  useEffect(()=>{
    
    const nextDocNumber = async () =>{

      const dateTime = new Date()
      const dateTimeString = dateTime.toLocaleDateString("en-US")

      const coll = collection(db,"posts")
      const snapshot = await getCountFromServer(coll)
      setIdNum(snapshot.data().count +1)
      setUpdatedDateTime(dateTimeString)
      setCreatedDateTime(dateTimeString)

      console.log("useEffect ran")
    }

    nextDocNumber()
  })
  // states 
    const [title, setTitle] = useState("");
    const [idNum,setIdNum]=useState("")
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("CodeWarrior-debug")
    // const [author, setAuthor] = useState("ANONYMOUS")
    const [subtitle, setSubtitle] =useState("")
    const [createddateTime, setCreatedDateTime]=useState("")
    const [updateddateTime,setUpdatedDateTime]=useState("")
    // const [url,setUrl]=useState("")
    // const [tagsArr,setTagsArr]=useState("")
    
    const params = {
      title:title,
      idNum:idNum,
      postBody:content,
      author:author,
      subtitle:subtitle,
      createddateTime:createddateTime,
      updateddateTime:updateddateTime,
      // url:url - added downstream

    }

    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  function handleSubTitleChange(event) {
    event.preventDefault();
    setSubtitle(event.target.value);
  }
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const makeQuery = async () => {
    const response = await fetch("api/createPost", options);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="container">

      <div className="text-black flex flex-col justify-start items-center min-h-screen bg-[#0C3BAA] p-[1em] w-full">
        {/* TODO find exact blue and cream colors (maybe cream gradient?) desired) */}


        {/* <form onSubmit={submitHandler} className="min-w-[16em] w-4/5 border-none "> */}
        <form className="min-w-[16em] w-4/5 border-none ">
          {/* <label htmlFor="title">Title</label> */}
          <div className="bg-white h-[70vh]">
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Enter a title"
              onChange={handleTitleChange}
              required
              className="mr-4"
            />
            <span className="pl-4 " >{title}</span>
            <br />
              <input
                type="text"
                value={subtitle}
                name="title"
                placeholder="Enter a subtitle"
                onChange={handleSubTitleChange}
                required
                className="mr-4"
              />
              <span className="pl-4 ">{subtitle}</span>
            <br/>
          <div className="bg-white ">
            <QuillNoSSRWrapper
              modules={modules}
              onChange={setContent}
              theme="snow"
              className=" min-h-[15vh] h-[60vh]"
              />
          </div>
          </div>

          
          
        </form>


  <button className="p-2 m-4 fw-bold bg-blue-600 rounded " onClick={makeQuery}>Submit</button>
  :
  <button href="/login" className="">
    <Link href="/login">LOGIN TO POST AS YOURSELF</Link>
    </button>


{/* Temporary */}
          {/* <button className="p-2 m-4 fw-bold bg-blue-600 rounded ">Submit</button> */}
      </div>
      </div>
        <div className="container">

        <details  > 
      <summary className="fw-bold"> SHOW HTML VALUES FOR DATABASE</summary>


          <p>Body: {content}</p>
          
          <p>Title: {title}</p>
          <p>Subtitle: {subtitle}</p>
          <p>By: {author}</p>
          <p>Created: {createddateTime}, Updated: {updateddateTime}</p>
          
          <p>URL Slug: {slugify(title.toLowerCase())}-{idNum}</p>
          {/* <p>Tags: {tagsArr}</p> */}
          
          {/* <p>Comments: {commentsArr}</p> */}


        </details>
        </div>

    </>
  );
}
