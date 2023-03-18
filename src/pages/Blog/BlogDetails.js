import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import "./BlogDetails.css";

function BlogDetails() {
  const [singleBlogPost, setSingleBlogPost] = useState([]);

  const client = createClient({
    space: "wu8tr1legspv",
    accessToken: "-VS1uUhYZZbcQY5wey5Iui8I5OfHvaKS0YLeyXIbS3w",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEntryById();
  }, []);

    return (
      <section className="hero-section-solo">
        <div id="layout" className="container-solo">
          <div className="content-solo">
            <div>
              <div className="posts">
                {/* <Link to="/blogList" className="content-subhead">
                  Blog Posts
                </Link> */}

                <section className="post">
                  <header className="post-header">
                    <img
                      src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
                      title=""
                      alt={singleBlogPost?.fields?.title}
                      width="578"
                      height="291"
                    />
                    <h2 className="post-title">
                      {singleBlogPost?.fields?.title}
                    </h2>
                    <p className="post-meta">
                      By{" "}
                      <a href="https://thecodeangle.com/" className="post-author">
                        {singleBlogPost?.fields?.blogAuthor}
                      </a>{" "}
                      Date <span></span>
                      <small>
                        {singleBlogPost?.fields?.createDate === undefined
                          ? "loading"
                          : new Intl.DateTimeFormat("en-GB", {
                              month: "long",
                              day: "2-digit",
                              year: "numeric",
                            }).format(
                              new Date(singleBlogPost?.fields?.createDate)
                            )}
                      </small>
                    </p>
                  </header>
                  <div className="post-description">
                    {/* <MD source={singleBlogPost?.fields?.blogContent} /> */}
                    <p children={singleBlogPost?.fields?.postContent} />,
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default BlogDetails;
