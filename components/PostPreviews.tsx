
import PostPreview from "./PostPreview";
import React  from "react";

const PostPreviews = ({allBlogs}:any) => {

  return (
    <>
      <div className="container px-4 px-lg-5 mt-4">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {allBlogs.map((item:any, index:any) => {
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

          </div>
        </div>
      </div>
    </>
  );
};

export default PostPreviews;
