import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostPreviews from "@/components/PostPreviews";
import { useEffect, useState } from "react";

// TODO change font

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
      <PostPreviews allBlogs={blogs} />
      <Footer />
    </>
  );
}
