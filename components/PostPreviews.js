import React , {useEffect} from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import PostPreview from './PostPreview'

const PostPreviews = () => {
  
    const demoPosts = [
        {
title:"Man must explore, and this is exploration at its greatest",
subtitle: "Problems look mighty small from 150 miles up",
slug:"small_probs",
author:"mr bootstrap"

        },

    ]
  
  useEffect(()=>{
    console.log(demoPosts);
  },[])

    return (


    <>

    {/* Post preview */}
              <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">

                    {/* Post preview */}
                    <div className="post-preview">
                        <Link href={"/"}>
                            <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </Link>
                        <p className="post-meta">
                            Posted by &nbsp;
                            <Link className='text-decoration-none' href="#!">Start Bootstrap</Link>
                            &nbsp; on September 24, 2022
                        </p>
                    </div>
                    {/* Divider */}
                    <hr className="my-4" />
                    
{
    demoPosts.map((item,index)=>{
        return <PostPreview 
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        slug={item.slug}
        author={item.author}
        
        />
    })
}

                     {/* Pager */}
                    <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase" href="#!">Older Posts →</Link></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PostPreviews
