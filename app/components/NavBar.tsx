"use client";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
function NavBar() {
  const [search, setSearch] = useState("");
  const route = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    route.push(`/namesearch/${search}`);
  };

  return (
    <div className="bg-blue-800 ">
      <div className="container mx-auto flex justify-between items-center p-2">
        <a href="/">
          <h1 className="text-2xl md:text-4xl font-bold italic">LookUp!</h1>
        </a>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            id="mainSearch"
            className=" block  flex-1 px-2 focus:bg-red-500"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-red-500 py-1 p-3 font-medium hover:scale-90">
            GO
          </button>
        </form>
      </div>
    </div>
    /*     https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple */
    /*   https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&titles=pizza&explaintext=1&exsectionformat=plain */
  );
}

export default NavBar;
