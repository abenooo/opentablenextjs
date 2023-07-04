import Link from 'next/link'
import React from 'react'

function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
          <Link href="/restaurant/banana" className="mr-7"> Overview </Link>
          <Link href="/restaurant/banan/menu" className="mr-7"> Menu </Link>
        </nav>
  )
}

export default RestaurantNavBar