"use client";

import React from "react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const route = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    route.push(`/namesearch/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className=" inline-flex  rounded-full  h-10 bg-white overflow-hidden justify-between border-2 ">
          <div className="flex bg-white items-center justify-center py-0    max-sm:w-[80%]  ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none focus:border-none bg-transparen placeholder:text-xl placeholder:italic  font-mono text-black pl-3 max-sm:pl-9"
              type="text"
              placeholder="search anything on the web.."
            />
          </div>
          <div className="bg-red-500 px-2   grid place-items-center ">
            <button className="  text-black   block font-medium ">GO</button>
          </div>
        </div>
      </form>
    </div>
  );
}

{
  /*   <div className="flex w-[60%]  md:w-96  rounded-md bg-white items-center border-2 border-white">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className=" h-6  px-2 block outline-none focus:border-none bg-transparent text-black "
            type="text"
          />

          <div className="bg-red-500 px-2  h-11 grid place-items-center ">
            <button className="  text-black   block font-medium ">GO</button>
          </div>
        </div> */
}
