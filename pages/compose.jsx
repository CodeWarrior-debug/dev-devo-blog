import Image from "next/image";
import Toast from "react-bootstrap/Toast";
import slugify from "slugify";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { MouseEvent, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useEffect } from "react";
import { db } from "../lib/firesStoreRef";
import { getCountFromServer, collection } from "firebase/firestore";
import Navbar from "../components/Navbar";
import {useSession} from 'next-auth/react'

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Compose() {
  const router = useRouter();

  const {data:session}= useSession()

  useEffect(() => {
    const nextDocNumber = async () => {
      const dateTime = new Date();
      const dateTimeString = dateTime.toLocaleDateString("en-US");

      const coll = collection(db, "posts");
      const snapshot = await getCountFromServer(coll);
      setIdNum(snapshot.data().count + 1);
      setUpdatedDateTime(dateTimeString);
      setCreatedDateTime(dateTimeString);
      setAuthor(session?.user.name)
    };

    nextDocNumber();
  }, []);
  // states
  const [title, setTitle] = useState("");
  const [idNum, setIdNum] = useState(0);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("CodeWarrior-debug");
  // const [author, setAuthor] = useState("ANONYMOUS")
  const [subtitle, setSubtitle] = useState("");
  const [createddateTime, setCreatedDateTime] = useState("");
  const [updateddateTime, setUpdatedDateTime] = useState("");
  const [show, setShow] = useState(false);

  // const [url,setUrl]=useState("")
  // const [tagsArr,setTagsArr]=useState("")

  const params = {
    title: title,
    idNum: idNum,
    postBody: content,
    author: author,
    subtitle: subtitle,
    createddateTime: createddateTime,
    updateddateTime: updateddateTime,
    // url:url - added downstream
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  };

// TODO figure out what type to assing to these events

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

  const makeQuery = async () => {
    // e.preventDefault();
    const data = fetch("api/createPost", options);
    console.log(data);
    router.push("/");
  };

  return (
    <>
    
      <Navbar/>
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
                <div className="bg-white ">
                  <QuillNoSSRWrapper
                    modules={modules}
                    onChange={setContent}
                    theme="snow"
                    className=" min-h-[15vh] h-[60vh]"
                    placeholder="Write your post here..."
                  />
                </div>
              </div>
            </form>
            <button
              className="p-2 m-4 fw-bold bg-blue-600 rounded "
              onClick={() => {
                makeQuery();
                setShow(true);
              }}
            >
              Submit
            </button>
            :
            <button>
              <Link href="/login">LOGIN TO POST AS YOURSELF</Link>
            </button>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <Image src="vercel.svg" height={100} width={100} alt={"temp"} />
                <strong className="me-auto">Great Success!</strong>
                <small>Just now</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, your post <span className="fw-bold">{title}</span>{" "}
                successfully stored! Redirecting...
              </Toast.Body>
            </Toast>
          </div>
        </div>
        <div className="container">
          <details>
            <summary className="fw-bold">
              {" "}
              SHOW HTML VALUES FOR DATABASE
            </summary>

            <p>Body: {content}</p>

            <p>Title: {title}</p>
            <p>Subtitle: {subtitle}</p>
            <p>By: {author}</p>
            <p>
              Created: {createddateTime}, Updated: {updateddateTime}
            </p>

            <p>
              URL Slug: {slugify(title.toLowerCase())}-{idNum}
            </p>
            {/* <p>Tags: {tagsArr}</p> */}

            {/* <p>Comments: {commentsArr}</p> */}
          </details>
        </div>
      </div>
    </>
  );
}
