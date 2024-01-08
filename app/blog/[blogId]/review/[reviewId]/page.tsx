import React from "react";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const Review = ({ params }: any) => {
  const random = getRandomInt(2);

  // * Only for hitting the error
  if (random === 1) {
    throw new Error("Error on review id");
  }

  return (
    <div>
      Review page {params.reviewId} of blog {params.blogId}
    </div>
  );
};

export default Review;
