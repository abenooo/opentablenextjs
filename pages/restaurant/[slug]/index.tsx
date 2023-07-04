import React from 'react'
import Link from 'next/link'
import NavBar from '@/componet/NavBar'
import Header from './componet/Header'
import RestaurantNavBar from './componet/RestaurantNavBar'
import Title from './componet/Title'
import Rating from './componet/Rating'
import Description from './componet/Description'
import Images from './componet/Images'
import Reviews from './componet/Reviews'
import ReservationCard from './componet/ReservationCard'
function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
           <ReservationCard />
          </div>
        </div>
      </main>
    </main>

  )
}

export default RestaurantDetails