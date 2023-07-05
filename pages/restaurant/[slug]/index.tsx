import React from 'react'
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
    <>
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
        </>
        

  )
}

export default RestaurantDetails