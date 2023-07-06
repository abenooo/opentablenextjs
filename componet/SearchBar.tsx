"use client"
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function SearchBar() {

  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div className="flex justify-center py-3 m-auto text-lg text-left">
        <input
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value)
          }}
          placeholder="State, city or town"
        />
        <button className="py-2 text-white bg-red-600 rounded px-9"
          onClick={() => {
            if (location === "banana") return;
            router.push("search")
          }}>
          Let's go
        </button>
      </div>
    </div>

  )
}

export default SearchBar



