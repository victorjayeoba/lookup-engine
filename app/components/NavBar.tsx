"use client";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import logo from "../assets/logo_2.png";
function NavBar() {
  const [search, setSearch] = useState("");
  const route = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    route.push(`/namesearch/${search}`);
  };

  return (
    <div className="bg-blue-800 text-gray-900 ">
      <div className="container mx-auto flex justify-between items-center p-2">
        <a className="inline-flex  items-center self-stretch gap-1 " href="/">
          <Image
            className="block filter"
            width={50}
            height={50}
            src={logo}
            alt="logo"
          />

          <h1 className="text-2xl   md:text-3xl font-bold ">LookUp!</h1>
        </a>
        <div>
          <a
            href="javascript:void(0)"
            className=" p-2 py-1 border-2 border-gray-900 rounded-full"
          >
            Sign In{" "}
          </a>
        </div>
      </div>
    </div>
    /*     https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple */
    /*   https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=pizza&explaintext=1&exsectionformat=plain */
  );
}

export default NavBar;
