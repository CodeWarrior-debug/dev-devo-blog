import { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import Link from "next/link";
const Post = () => {
  const [post, setPost] = useState({});

  const number = 1;

  const router = useRouter();

  const getData = async () => {
    const response = await fetch("../../api/readPost", {
      headers: {
        customPostIndex: number,
        // customPostIndex: router.query.post
        // customPostIndex: JSON.stringify(router.query.post)
        // customPostIndex: number,
      },
    });
    const data = await response.json();
    setPost(data);
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

const {author,commentsArr,createddateTime,idNum,postBody,subtitle,tagsArr,title,updateddateTime,url} = post

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
          <h4 className="text-danger">TODO: show these tags{tagsArr}
          <br/>
          <br/>
          CREATED AT {createddateTime}
          <br/>
           UPDATED AT {updateddateTime}
          <br/>
          {commentsArr}
          <br/>
          {url}
          </h4>
      </div>
        </div>
        </div>
    </>
  );
};

// export async function getStaticPaths(){

// const res = await fetch('api/readPosts')
// const posts = await res.json()

// const posts = [
//   {id:1},{id:2}
// ]

// Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
//   params: { id: post.id.toString() },
// }))

// We'll pre-render only these paths at build time.
// { fallback: 'blocking' } will server-render pages
// on-demand if the path doesn't exist.
// return { paths, fallback: 'blocking' }

// }

// export async function getStaticProps(){

//   const res = await fetch('api/readPost')

//   const post = await res.json()

// return {
//   props:{post},
// }
// }

export default Post;
