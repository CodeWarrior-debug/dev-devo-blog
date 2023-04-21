import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import PostPreviews from "../components/PostPreviews";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useSession from "next-auth"
import styles from '/styles/auth.module.css'

// TODO fix linter errors

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const { data: session, status } = useSession()
  const loading = status === "loading"

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
    // console.log("blogs", blogs)
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
      <Header/>
      <Navbar />
      <Heading />
      <h1 className="text-center m-3 text-primary">Latest 5 Posts</h1>
      <PostPreviews allBlogs={blogs} />

      <main className={styles.main}>
        <h1 className={styles.title}>Authentication in Next.js app using Next-Auth</h1>
        <div className={styles.user}>
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <>
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <img src={session.user.image} alt="" className={styles.avatar} />
              </>
            }
           {
            !session &&
              <>
               <p className={styles.title}>Please Sign in</p>
               <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />
               <p className={styles.credit}>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
              </>
           }
         </div>
      </main>

      
    </>
  );
}
