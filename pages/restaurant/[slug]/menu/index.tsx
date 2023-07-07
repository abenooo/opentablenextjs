import React from 'react'
import RestaurantNavBar from '../componet/RestaurantNavBar'
import Menu from '../componet/Menu'
import RestaurantLayout from '../layout'
function RestaurantMenu() {
  return (
    <RestaurantLayout>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </RestaurantLayout>


  )
}

export default RestaurantMenu