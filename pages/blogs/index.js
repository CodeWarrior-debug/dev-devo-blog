
import Navbar from "@/components/Navbar";
import PostPreviews from "@/components/PostPreviews";
import { useEffect, useState } from "react";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getFBDocs = async () => {
      const res = await fetch("./api/readPosts");
      const data = await res.json();

      setBlogs(data);
    };

    getFBDocs();

    // console.log("blogs", blogs)
  }, []);

  return (
    <>
      <Navbar />
      <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
        <div className="text-black flex flex-col justify-start items-center min-h-screen bg-[#0C3BAA] p-[1em] w-full"></div>
      <PostPreviews allBlogs={blogs} />
      
      </div>
      </div>
    </>
  );
}
