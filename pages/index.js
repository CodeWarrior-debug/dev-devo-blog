import Link from "next/link";
import Head from "next/head";
import Card from "@/components/Card";
import Button from "react-bootstrap/Button"
import Navbar from "@/components/Navbar"
import Heading from "@/components/Heading";
import PostPreviews from "@/components/PostPreviews";

// TODO change font

export default function Home() {
  
  
  const myBlogs = [
    {
      title: "testTitle",
      post: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "Jamesbo",
      date: "12/28/9999",
      subtitle:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      url: "/something_in_the_way-1",
      id: 1,
      tags: [],
      comments: [],
    },
    {
      title: "Nobody knows my sorrow",
      post: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "Jamesyboy",
      date: "12/28/9199",
      subtitle:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      url: "/nobody_knows_my_sorrow-2",
      id: 2,
      tags: ["happiness", "truth"],
      comments: [
        {
          commenter: "",
          comment: "You are the MAN!!",
          date: "12/29/9999",
        },
      ],
    },
    {
      title: "Winsome Ways of Women",
      post: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      author: "Notthisguy",
      date: "12/28/9199",
      subtitle:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      url: "/winsome_ways_of_women_3",
      idNum: 3,
      tags: [],
      comments: [],
    },
  ];

 

  return (
    <>
      <Head>
        <title>A Developer&apos;s Devotions and Doings</title>
        <meta name="description" content="Blogs on the web development process." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="bg-dark min-vh-100"> */}
      

      <Navbar/>
      <Heading/>
      <PostPreviews/>


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
