import React, { useEffect, useState} from "react";
import Link from "next/link";
import slugify from "slugify";
import PostPreview from "./PostPreview";

const PostPreviews = ({allBlogs}) => {
// const [demoPosts,setDemoPosts] = useState([])

  
  
  const demoPosts = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      subtitle: "Problems look mighty small from 150 miles up",
      slug: "small_probs",
      author: "mr bootstrap",
    },
    {
      title: "lipsummmmmmmmmmmmmmmmmmmmmmm",
      subtitle: "CAn you feel the love tonight",
      slug: "no_worries",
      author: "sirboot",
    },
    {
      title: "winning streak",
      subtitle: "stephen curry",
      slug: "no_worries",
      author: "captcha",
    },
  ];

  useEffect(() => {
    
  console.log(allBlogs)
    
  }, []);

  return (
    <>
      <div className="container px-4 px-lg-5 mt-4">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {allBlogs.map((item, index) => {
              return (
                <PostPreview
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  slug={item.url}
                  author={item.author}
                />
              );
            })}

            {/* Pager */}
            <div className="d-flex justify-content-end mb-4">
              <Link className="btn btn-primary text-uppercase" href="#!">
                All Posts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPreviews;
