import { React, useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";
import "./Blog.css"

function BlogList() {
    const [blogPosts, setBlogPosts] = useState([]);


    const client = createClient({space:"wu8tr1legspv", accessToken: "-VS1uUhYZZbcQY5wey5Iui8I5OfHvaKS0YLeyXIbS3w"})
  
    useEffect(() => {
        const getAllEntryes = async () => {
            try{
                await client.getEntries().then((entries) => {
                    console.log(entries)
                    setBlogPosts(entries)
                })
            }catch{
                console.log("error")
            }
        }
        getAllEntryes();
    }, [])

    return (
    <div id="layout" className="container-post">
      <div className="">
        <div>
          <div className="posts">

            {blogPosts?.items?.map((post)=>(
            <section className="post" key={post.sys.id}>
              <header className="post-header">
                <img src={post.fields.blogImage.fields.file.url} title="" alt={post.fields.title} width="578" height="291" />
                <h2 className="post-title">{post.fields.blogTitle}</h2>
                <p className="post-meta">
                  By{" "}
                  <a
                    href="https://thecodeangle.com/"
                    className="post-author"
                  >{post.fields.blogAuthor}</a>{" "}
                  Date <span></span>
                  <small>{post.fields.createdDate}</small>
                </p>
              </header>
              <div className="post-description">
                <p>
                    {post.fields.blogSummary}
                </p>
                <Link to={`/blogDetails/${post.sys.id}`} className="button button1">
                  Read more
                </Link>
              </div>
            </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
