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

  //   return (
  //     <div id="layout" className="container-post">
  //       <div className="">
  //         <div>
  //           <div className="posts">
  //             <Link to="/blogList">Blog Posts</Link>
  //             {singleBlogPost?.items?.map((post) => (
  //               <section className="post" key={singleBlogPost.sys.id}>
  //                 <header className="post-header">
  //                   <img
  //                     src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
  //                     title=""
  //                     alt={singleBlogPost?.fields?.title}
  //                     width="578"
  //                     height="291"
  //                   />
  //                   <h2 className="post-title">
  //                     {singleBlogPost?.fields?.title}
  //                   </h2>
  //                   <p className="post-meta">
  //                     By{" "}
  //                     <a href="https://thecodeangle.com/" className="post-author">
  //                       {singleBlogPost?.fields?.blogAuthor}
  //                     </a>{" "}
  //                     Date <span></span>
  //                     <small>{singleBlogPost?.fields?.createdDate}</small>
  //                   </p>
  //                 </header>
  //                 <div className="post-description">
  //                   <p>{singleBlogPost?.fields?.postContent}</p>
  //                 </div>
  //               </section>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
    return (
      <section className="hero-section">
        <div id="layout" className="container-post">
          <div className="content">
            <div>
              <div className="posts">
                <Link to="/blogList" className="content-subhead">
                  Blog Posts
                </Link>

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
//   return (
//     <div id="layout" className="container-post">
//       <div className="">
//         <div>
//           <div className="posts">
//             {singleBlogPost?.items?.map((post) => (
//               <section className="post" >
//                 <header className="post-header">
//                   <img
//                     src={singleBlogPost?.fields?.blogImage?.fields?.file?.url}
//                     title=""
//                     alt={singleBlogPost?.fields?.title}
//                     width="578"
//                     height="291"
//                   />
//                   <h2 className="post-title">
//                     {singleBlogPost?.fields?.blogTitle}
//                   </h2>
//                   <p className="post-meta">
//                     By{" "}
//                     <a href="https://thecodeangle.com/" className="post-author">
//                       {singleBlogPost?.fields?.blogAuthor}
//                     </a>{" "}
//                     Date <span></span>
//                     <small>{singleBlogPost?.fields?.createdDate}</small>
//                   </p>
//                 </header>
//                 <div className="post-description">
//                   <p>{singleBlogPost?.fields?.postContent}</p>
//                 </div>
//               </section>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}

export default BlogDetails;
