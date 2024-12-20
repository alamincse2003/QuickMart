import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCategory></HomeCategory>
      <CategoryShowCase></CategoryShowCase>
      {/* <Register></Register> */}
      <LocationSprade></LocationSprade>
      {/* <AboutUs></AboutUs> */}
      <Sponser></Sponser>
    </div>
  )
}

export default Home
