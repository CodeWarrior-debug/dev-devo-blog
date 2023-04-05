import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar"
import Heading from "@/components/Heading";
import PostPreviews from "@/components/PostPreviews";
import {useEffect,useState} from "react";

// TODO change font

export default function Home() {
  const [blogs,setBlogs]=useState([])


useEffect(()=>{
  
  const getFBDocs = async ()=>{
    const res = await fetch("./api/readPosts")
    const data = await res.json()

    setBlogs(data)
  }
  
  getFBDocs()
  
  // console.log("blogs", blogs)

},[])


 

  return (
    <>
      <Head>
        <title>A Developer&apos;s Devotions and Doings</title>
        <meta name="description" content="Blogs on the web development process." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="bg-dark min-vh-100"> */}
      

      <Navbar />
      <Heading/>
      <PostPreviews allBlogs={blogs} />
                  {/* Pager */}
                  {/* <div className="d-flex justify-content-end mb-4">
              <Link className="btn btn-primary text-uppercase" href="#!">
                All Posts →
              </Link>
            </div> */}
<Footer/>

      {/* <!-- Navigation--> */}

    
    
    
      
{/*     <!-- Navigation--> */}
    {/* <div  >

    
        






        
        {/* <div className="text-black grid place-items-center min-h-screen bg-[#0C3BAA] p-[2em] "> */}
          {/* TODO find exact blue and cream colors (maybe cream gradient?) desired) */}
        {/* <p className="text-white" >A Developer&apos;s Devotions and Doings</p> */}

          {/* <div className="bg-[#FFFEF2] min-h-[80vh] min-w-[65vw] flex flex-col items-center p-[2em] rounded-2xl"> */}
            {/* CARD - COMPONENTIZE */}

            {/* {myBlogs.map((blog) => { return ( <Card key={blog.id} title={blog.title} subtitle={blog.subtitle} author={blog.author} date={blog.date} id={blog.id} url={blog.url} /> ); })} */}
          {/* </div> */}
        {/* </div> */}
      
    </>
  );
}
