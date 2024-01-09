import Link from "next/link";
import React from "react";

const Notification = () => {
  return (
    <div>
      Notification page
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </div>
  );
};

export default Notification;
