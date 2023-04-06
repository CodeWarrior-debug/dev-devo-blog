
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import ReactQuill from "react-quill";

// title,post,author,date,subtitle,url,idNum,tagsArr,commentsArr

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Blog() {
  // states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("ANONYMOUS");
  const [subtitle, setSubtitle] = useState("");
  const [createddateTime, setCreatedDateTime] = useState("");
  const [updateddateTime, setUpdatedDateTime] = useState("");
  const [url, setUrl] = useState("");

  const router = useRouter();

  const testInterval = ()=>{
    setInterval()
  }

  const getData = async () => {
    const response = await fetch("../api/readPost", {
      headers: {
        customPostIndex: router.query.blog,
      },
    });

    const data = await response.json();

    setUrl(data.url);
    setTitle(data.title), setContent(data.postBody);
    setSubtitle(data.subtitle)
    setUpdatedDateTime(new Date().toDateString());
    setAuthor(data.author);
    setCreatedDateTime(new Date(Date.parse(data.createddateTime)).toDateString());
  };

  useEffect(() => {
    getData();
  });

  

  const params = {
    title: title,
    postBody: content,
    subtitle: subtitle,
    updateddateTime: updateddateTime,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      custompostindex: router.query.blog,
    },
  };

  const updateData = async () => {
    const response = await fetch("../api/updatePost", options);
    // const response = await fetch("../api/updatePost2")
    const data = await response.json();
    console.log(data);
  };


  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  function handleSubTitleChange(event) {
    event.preventDefault();
    setSubtitle(event.target.value);
  }
// React Quill settings



const Quill = ReactQuill.Quill
var Font = Quill.import('formats/font')
const fonts_whitelist = ['Ubuntu', 'Raleway', 'Roboto']
Font.whitelist = fonts_whitelist;
Quill.register(Font, true)

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote",{color:[]}],
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

const formats = ["color"]

  return (
    <>
      <Navbar/>
      <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
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
              <span className="pl-4 ">{title}</span>
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
              <br />
              <br />
              <div className="bg-white container">
                {/* https://quilljs.com/docs/api/ */}
                <QuillNoSSRWrapper
                  modules={modules}
                  onChange={setContent}
                  formats={formats}
                  theme="snow"
                  className=" min-h-[15vh] h-[60vh]"
                  value={content}
                />
              </div>
            </div>
          </form>
          <button
            className="p-2 m-4 fw-bold bg-blue-600 rounded"
            onClick={updateData}
          >
            Update
          </button>
          :
          <button href="/login" className="">
            <Link href="/login">LOGIN TO POST AS YOURSELF</Link>
          </button>
          {/* Temporary */}
          {/* <button className="p-2 m-4 fw-bold bg-blue-600 rounded ">Submit</button> */}
        </div>
      </div>
      <div className="container">
        <details>
          <summary className="fw-bold"> SHOW HTML VALUES FOR DATABASE</summary>

          <p>Body: {content}</p>

          <p>Title: {title}</p>
          <p>Subtitle: {subtitle}</p>
          <p>By: {author}</p>
          <p>
            Created: {createddateTime}, Updated: {updateddateTime}
          </p>

          <p>URL Slug: {url}</p>
          {/* <p>Tags: {tagsArr}</p> */}

          {/* <p>Comments: {commentsArr}</p> */}
        </details>
      </div>
      </div>
    </>
  );
}
