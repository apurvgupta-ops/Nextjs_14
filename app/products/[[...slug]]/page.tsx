import React from "react";
import { Metadata } from "next";

type props = {
  params: {
    slug: string[];
  };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.slug[0]}`);
    });
  });

  return {
    title: `product ${title}`,
  };
};

const Products = ({ params }: any) => {
  console.log({ params });

  if (params.slug?.length === 3) {
    return <h2>Iphone is this cost {params.slug[2]}</h2>;
  }
  return <div>Products page {params.slug}</div>;
};

export default Products;
