import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" py-5 bg-blue-800">
      <p className="text-center font-light text-base ">
        <span>This website was designed and developed by </span>
        <Link
          className="inline-block text-xl"
          href={"https://jsonplaceholder.typicode.com/posts?userId=100"}
        >
          Victor Jayeoba
        </Link>
        <span> using Nextjs, TailwindCSs and Apis.</span>
      </p>
    </footer>
  );
}
