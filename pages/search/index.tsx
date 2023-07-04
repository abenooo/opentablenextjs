import React from "react"
import Link from "next/link"
import Header from "./componet/Header"
import NavBar from "@/componet/NavBar"
import SearchSideBar from "./componet/SearchSideBar"
import RestaurantCards from "./componet/RestaurantCards"
function Search() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSideBar />
          <div className='w-5/6'>
            <RestaurantCards />
          </div>
        </div>
      </main>
    </main>
  )
}

export default Search
