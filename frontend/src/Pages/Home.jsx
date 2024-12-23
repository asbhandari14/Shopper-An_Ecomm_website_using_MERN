import React from 'react'
import Slider from '../Components/Slider'
import Popular from '../Components/Popular'
import NewCollection from '../Components/NewCollection'
import Exclusive_Offer from '../Components/Exclusive_Offer'
import Newsletter from '../Components/Newsletter'
// import HiddenNavbar from '../Components/HiddenNavbar'

const Home = () => {
  return (
    <>
      <Slider />
      <Popular />
      <Exclusive_Offer/>
      <NewCollection/>
      <Newsletter />
    </>
  )
}

export default Home
