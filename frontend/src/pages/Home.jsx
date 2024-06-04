/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from '../components/index.js'
import CounterCard from '../components/CounterCard.jsx'
import HomePageCard from '../components/HomePageCard.jsx'
import HomePageCardTwo from '../components/HomePageCardTwo.jsx'
import HomePageCardThree from '../components/HomePageCardThree.jsx'
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="text-center font-semibold ">
        <div className="flex justify-center items-center gap-10">
          {/* <CounterCard title={'Dissertations Count'} />
          <CounterCard title={'Thesis Count'} />
          <CounterCard title={'Synopsis Count'} /> */}
          <HomePageCard/>
          <HomePageCardTwo/>
          <HomePageCardThree/>

        </div>
      </div>
    </>
  )
}

export default Home