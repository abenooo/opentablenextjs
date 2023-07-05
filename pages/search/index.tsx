import React from "react"
import Header from "./componet/Header"
import SearchSideBar from "./componet/SearchSideBar"
import RestaurantCards from "./componet/RestaurantCards"
function Search() {
  return (
    <>
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSideBar />
          <div className='w-5/6'>
            <RestaurantCards />
          </div>
        </div>
        </>
  )
}

export default Search
