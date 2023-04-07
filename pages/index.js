import Footer from "@/components/Footer";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import PostPreviews from "@/components/PostPreviews";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const get5Docs = async()=>{

      const getFBDocs = async () => {
        const res = await fetch("./api/read5Posts");
        const data = await res.json();
  
        setBlogs(data);
    }
    
    await getFBDocs();
    };

  get5Docs()
    console.log("blogs", blogs)
  }, []);

  return (
    <>
      <Head>
        <title>A Developer&apos;s Devotions and Doings</title>
        <meta
          name="description"
          content="Blogs on the web development process."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Heading />
      <PostPreviews allBlogs={blogs} />

      <Footer />
    </>
  );
}
