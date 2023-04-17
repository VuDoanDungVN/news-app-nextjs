"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);


  }
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
      onSubmit={handleSearch}
        placeholder="Search here..."
        type="text"
        onChange={(e)=> setInput(e.target.value)}
        className="flex-1 w-full h-14 placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />
      <button type="submit" disabled={!input} className="text-orange-400 disabled:text-gray-400">Search</button>
    </form>
  );
}

export default SearchBox;
