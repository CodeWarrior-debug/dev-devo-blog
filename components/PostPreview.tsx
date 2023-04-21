import React from 'react';
import Link from 'next/link'

const PostPreview = (props: any) => {
    const {title, subtitle,slug, author} = props;
  return (
    <>
                  
                          <div className="post-preview">
                        <Link href={`blogs/${slug}`} className="text-decoration-none text-dark text-break">
                            <h2 className="post-title text-decoration-none text-center text-wrap text-break mb-4">{title}</h2>
                            <h5 className="post-subtitle text-center fw-light text-wrap text-break mb-2">{subtitle}</h5>
                        </Link>
                        <p className="post-meta text-wrap text-break text-center text-muted">
                            Posted by&nbsp;
                            <span className='fw-bold text-dark'>{author}</span>
                            &nbsp;on September 24, 2022
                        </p>
                    </div>
                  
                  <hr className="my-4" />
    </>
  )
}

export default PostPreview
