import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Post = ({postFacts}) => {
  const [post, setPost] = useState({});



  // const router = useRouter();
  

  const getPosts = async ()=>{
    const posts = await fetch('../../api/readPosts')
    const data = await posts.json()
    setNumber(data)
    return data
  }

  const getData = async (postIdNum) => {
    
    let number = postIdNum
    const response = await fetch("../../api/readPost", {
      headers: {
        customPostIndex: number,
      },
    });
    const data = await response.json();
    

    setPost(data);
    // console.log(data);
  };

useEffect(()=>{
  console.log(postFacts)
})


  // useLayoutEffect(() => {
  // useEffect(() => {


// Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
//   params: { id: post.id.toString() },
// }))

//  console.log(paths)
// return { paths, fallback: 'blocking' }




    // console.log(router.query.post)
    // getData(router.query.post);

    // console.log(router.query.pathname.substring(router.query.pathname.lastIndexOf('/')))
  // }, []);

// const {author,commentsArr,createddateTime,idNum,postBody,subtitle,tagsArr,title,updateddateTime,url} = post
const {author,commentsArr,createddateTime,idNum,postBody,subtitle,tagsArr,title,updateddateTime,url} = postFacts

  return (
    <> <div>
      <div className="container ">
        <div className="row justify-content-center">
          <h1 className="text-center">{title} </h1>
          <h1 className="text-center fs-4 text-muted">{subtitle} </h1>
          <h3 className="fs-4 text-muted text-center">{author} <span className="fs-6">posted on </span> 
          <span className="fs-5">
          {new Date(createddateTime).toDateString() }
            </span> </h3>
          <p className="border rounded vh-100 fs-5 text-center p-4"> {postBody}</p>
      </div>

      <div>

          {/* TODO format these, or decide on placeholders */}
          {/* <h4 className="text-danger">{tagsArr} */}

           {/* UPDATED AT {updateddateTime} */}
          <br/>
          {/* TODO implement later */}
          {/* {commentsArr} */}

          {url}
          
      </div>
        </div>
        </div>
    </>
  );
};

export async function getStaticPaths(){

const res = await fetch('../../api/readPosts')
const posts = await res.json()

// Get the paths we want to pre-render based on posts
const paths = posts.map((post) => ({
  params: { id: post.idNum.toString() },
}))

// We'll pre-render only these paths at build time.
// { fallback: 'blocking' } will server-render pages
// on-demand if the path doesn't exist.
return { paths, fallback: 'blocking' }

}

export async function getStaticProps({params}){

  const postsFacts = await fetch('../../api/readPost',{headers: 
    {
    customPostIndex: params.id,
  } }
  .then((res)=>res.data)
  .catch((err)=>console.log(err))
  )
  
return {
  props:{
    
    postFacts: postsFacts},
}
}

export default Post;
