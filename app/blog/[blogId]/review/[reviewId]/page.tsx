import React from "react";

const Review = ({ params }: any) => {
  return (
    <div>
      Review page {params.reviewId} of blog {params.blogId}
    </div>
  );
};

export default Review;
