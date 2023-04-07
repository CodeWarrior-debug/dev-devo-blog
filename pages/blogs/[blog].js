import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import DOMPurify from "isomorphic-dompurify";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

// const DOMpurify = require('dompurify')(window)
export default function Blog() {
  
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("<h1>parse WORKS!!</h1>");
  const [author, setAuthor] = useState("ANONYMOUS");
  const [subtitle, setSubtitle] = useState("");
  const [createddateTime, setCreatedDateTime] = useState("");
  const [updateddateTime, setUpdatedDateTime] = useState("");
  const [url, setUrl] = useState("");
  const [idNum, setIdNum] = useState("");
  const [userIsAuthor, setUserIsAuthor] = useState("");

  const router = useRouter();

  const getData = async () => {
    const response = await fetch("../api/readPost", {
      headers: {
        customPostIndex: router.query.blog,
      },
    });

    const data = await response.json();

    setUrl(data.url);
    setTitle(data.title);
    // setContent(data.postBody);
    setContent(data.postBody);
    setSubtitle(data.subtitle);
    setUpdatedDateTime(new Date().toDateString());
    setAuthor(data.author);
    setCreatedDateTime(new Date(Date.parse(data.createddateTime)).toDateString());
    const splitter = router.query.blog.split("-")
  
    setIdNum (splitter[splitter.length-1])
  };

  const callData = async () => {
    await getData();
  };

  useEffect(() => {
    callData();
  }, []);

  const params = {
    title: title,
    postBody: content,
    subtitle: subtitle,
    updateddateTime: updateddateTime,
  };

  const options = {
    method: "PUT",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      custompostindex: router.query.blog,
    },
  };

  const delOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      custompostindex: idNum,
    },
  };


  const updateData = async () => {
    
    const response = await fetch("../api/updatePost", options);
    const data = await response.json();
    if(data){
      router.push("/blogs")
    }
  };

  const deletePost = async () => {
    const response = await fetch("../api/deletePost", delOptions);
    const data = await response.json();
    console.log(data);
    router.push("/blogs");
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

  // Trying to get different quill fonts to work

  // const Quill = ReactQuill.Quill
  // var Font = Quill.import('formats/font')
  // const fonts_whitelist = ['Ubuntu', 'Raleway', 'Roboto']
  // Font.whitelist = fonts_whitelist;
  // Quill.register(Font, true)



  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", { color: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "code-block"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };


  return (
    <>
      <Navbar />
      <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
          <div className="text-black flex flex-col justify-start items-center min-h-screen bg-[#0C3BAA] p-[1em] w-full">
            <form className="min-w-[16em] w-4/5 border-none ">
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


                  { userIsAuthor ?

                    <QuillNoSSRWrapper
                      modules={modules}
                      onChange={setContent}
                      theme="snow"
                      className=" min-h-[15vh] h-[60vh]"
                      value={content}
                      placeholder="Write your post here..."
                    />
                  
                    :
                    
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}/>

                  }
                  {/* https://quilljs.com/docs/api/ */}
                {/* parse(content) */}
                {/* {parse(`${content}`) + "parse" } */}


                



                 
              </div>
              </div>
              
            </form>

            {
              userIsAuthor?
              <>
                <button
                  className="p-2 m-4 fw-bold bg-blue-600 rounded"
                  onClick={updateData}
                >
                  Update
                </button>
                <button
                  className="p-2 m-4 fw-bold bg-red-600 rounded"
                  onClick={deletePost}
                >
                  DELETE
                </button>
            </>
            :
              ""
          }
            
              <Link href="/login">LOGIN TO POST AS YOURSELF</Link>
            
            {/* Temporary */}
            {/* <button className="p-2 m-4 fw-bold bg-blue-600 rounded ">Submit</button> */}
          </div>
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

        </details>
      </div>
    </>
  );
}
