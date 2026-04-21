import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cta from '../../homecomponents/Cta'

const UrbanPlanning = () => {
  return (
    <div>
      <Header/>
      <section className="w-full bg-white">
        <div className="w-full px-4 md:px-10 pt-20 pb-16 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 text-center">
            Urban Planning
          </h1>

          <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-[#1a1a1a] text-center">
            ECMDC helps cities and urban planners build smarter, more sustainable communities
            through strategic planning and innovative solutions.
          </p>
        </div>
        <div className="w-full px-4 md:px-10 pb-10 flex justify-center">
          <div className="w-full overflow-hidden rounded-3xl">
            <div className="h-[420px] md:h-[500px] w-full">
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg"
                alt="Urban Planning"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:px-10 pb-20 flex justify-center">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base leading-relaxed text-[#1a1a1a] mb-6 text-center">
              We partner with urban planners and city leaders to address infrastructure challenges,
              implement smart city solutions, and create livable communities. Our expertise spans
              sustainable development, mobility planning, and digital urban services to enhance
              quality of life.
            </p>
          </div>
        </div>
      </section>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default UrbanPlanning
