import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>

      <h2>Home page</h2>
    </div>
  );
};

export default Home;
