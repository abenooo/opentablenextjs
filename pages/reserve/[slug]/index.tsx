import React from 'react'
import NavBar from '@/componet/NavBar'
import Header from './componet/Header'
import Form from './componet/Form'
import Footer from '@/componet/Footer'
function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>  
        <Footer />
      </main>
    </main>

  )
}

export default Reserve