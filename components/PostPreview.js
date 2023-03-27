import React from 'react'
import Link from 'next/link'

const PostPreview = (props) => {
    const {title, subtitle,slug, author} = props;
  return (
    <>
                                        {/* Divider */}
                          <div class="post-preview">
                        <Link href={slug} className="text-decoration-none text-dark">
                            <h2 class="post-title text-decoration-none">{title}</h2>
                            <h3 class="post-subtitle">{subtitle}</h3>
                        </Link>
                        <p class="post-meta">
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
