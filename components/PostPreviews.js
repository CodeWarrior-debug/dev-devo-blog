import Link from "next/link";
import PostPreview from "./PostPreview";

const PostPreviews = ({allBlogs}) => {
// const [demoPosts,setDemoPosts] = useState([])




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
