import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Post } from "@/lib/objectDefs";

// title,post,author,date,subtitle,url,idNum,tagsArr,commentsArr

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  // TOOD handle backend...

  function submitHandler(event) {
    event.preventDefault();

    const requestObj = {
      id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished,
    };

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(requestObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
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

  return (
    <>
      <Header />
      <div className="text-black flex flex-col justify-start items-center  bg-[#0C3BAA] p-[1em] w-full">
        {/* TODO find exact blue and cream colors (maybe cream gradient?) desired) */}


        <form onSubmit={submitHandler} className="min-w-[16em] w-4/5 border-none ">
          {/* <label htmlFor="title">Title</label> */}
          <div className="bg-white h-[70vh]">
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Enter a title"
              onChange={handleTitleChange}
              required
              
            />

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

          <button className="p-2 m-4 font-bold text-white bg-blue-600 rounded-lg ">Save</button>
      </div>
          <p>{content}</p>
    </>
  );
}
