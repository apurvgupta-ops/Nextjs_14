import React from "react";

const Products = ({ params }: any) => {
  console.log({ params });

  if (params.slug?.length === 3) {
    return <h2>Iphone is this cost {params.slug[2]}</h2>;
  }
  return <div>Products page {params.slug}</div>;
};

export default Products;
