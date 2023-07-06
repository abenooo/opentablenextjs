import Head from 'next/head'
import Header from '@/componet/Header';
import RestaurantCards from '@/componet/RestaurantCards';

export default function Home() {

  return (
    <>
      <Head>
        <title>Open Table Resturant Reservation </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favico.ico" />
      </Head>
      <main className='min-h-screen bg-gray-1--'>
        <main className='ml-auto bg-white max-w-screen-2xl'>
          <main>
          <Header />
          <div className="flex flex-wrap justify-start py-3 mt-10 px-36">
            <RestaurantCards />
          </div>
          </main>
        </main>
      </main>
    </>
  )
}
