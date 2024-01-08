import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
const Blog = ({ params }: any) => {
  const blogId = 1;
  console.log(params);
  return (
    <div>
      <Link href={"/"}>Back</Link>
      <h2>Blog page</h2>
      <h3>
        <Link href={`blog/${blogId}`}>Blog 1</Link>
      </h3>
      <h3>
        <Link href={`blog/${params.blogId}`}>Blog 2</Link>
      </h3>
      <h3>
        <Link href={`blog/${params.blogId}`}>Blog 3</Link>
      </h3>
    </div>
  );
};

export default Blog;
