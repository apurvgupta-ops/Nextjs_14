import React from "react";

const DynamicBlog = ({ params }: any) => {
  return <div>DynamicBlog page {params.blogId}</div>;
};

export default DynamicBlog;
