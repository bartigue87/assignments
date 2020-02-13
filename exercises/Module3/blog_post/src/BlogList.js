import React from "react";
import BlogPost from "./BlogPost";
import array from "./array";

function BlogList() {
  const blogComponents = array.map(function(blog) {
    return (
      <BlogPost
        key={blog.id}
        title={blog.title}
        subTitle={blog.subTitle}
        author={blog.author}
        date={blog.date}
      />
    );
  });
  return <div>{blogComponents}</div>;
}

export default BlogList;
