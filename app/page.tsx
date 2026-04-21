"use client";
import { useState } from 'react'
import Header from './components/Header'
import Hero from './homecomponents/Hero'
import Buttons from './homecomponents/Buttons'
import Navs from './homecomponents/Navs'
import Assist from './homecomponents/Assist'
import Career from './homecomponents/Career'
import Cards from './homecomponents/Cards'
import Featured from './homecomponents/Featured'
import Insights from './services/components/Insights'
import Exploremore from './services/components/Exploremore'
import Cta from './homecomponents/Cta'
import Footer from './components/Footer'


const page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesLength = 11; // Total number of images in Hero

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  };

  return (
<div className="bg-white overflow-x-hidden">
    <Header/>
    <Hero currentIndex={currentIndex} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
    <Buttons onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
    <Navs/>
    <Assist/>
    <Career/>
    <Cards/>
    <Featured/>
    <Insights/>
    <Exploremore/>
    {/* Add spacing for the overlaying subscriber bar */}
    <div className="mt-16"></div>
    <Cta/>
    <Footer/>
    </div>

  )
}

export default page