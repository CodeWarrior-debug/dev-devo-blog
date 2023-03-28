import React from 'react'
import Link from 'next/link'

const PostPreview = (props) => {
    const {title, subtitle,slug, author} = props;
  return (
    <>
                                        {/* Divider */}
                          <div className="post-preview">
                        <Link href={slug} className="text-decoration-none text-dark text-break">
                            <h2 className="post-title text-decoration-none text-center text-wrap text-break mb-4">{title}</h2>
                            <h5 className="post-subtitle text-center fw-light text-wrap text-break mb-2">{subtitle}</h5>
                        </Link>
                        <p className="post-meta text-wrap text-break text-center">
                            Posted by &nbsp;
                            <Link href={slug}>{author}</Link>
                            &nbsp; on September 24, 2022
                        </p>
                    </div>
                                        {/* Divider */}
                                        <hr className="my-4" />
    </>
  )
}

export default PostPreview
