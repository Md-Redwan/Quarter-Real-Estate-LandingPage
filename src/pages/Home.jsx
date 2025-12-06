import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import AboutUs from '../component/AboutUs'
import OurService from '../component/OurService'
import Properties from '../component/Properties'
import ApartmentSketch from '../component/ApartmentSketch'
import VideoSection from '../component/VideoSection'
import FeaturedListings from '../component/FeaturedListings'
import OurTestimonial from '../component/OurTestimonial'
import NewsAndBlogs from '../component/NewsAndBlogs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurService/>
      <Properties/>
      <ApartmentSketch/>
      <VideoSection/>
      <FeaturedListings/>
      <OurTestimonial/>
      <NewsAndBlogs/>
    </div>
  )
}

export default Home
