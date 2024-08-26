import React from 'react'

const HeroTwo = () => {
  return (
    <div className='flex justify-center px-2 md:px-6 lg:px-10 mt-6 sm:mt-8 lg:mt-16  2xl:px-80 2xl:mt-28'>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 lg:space-y-0 lg:space-x-10">
           
            <div data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <img className='rounded-2xl object-cover   ' src="public/herotwo.avif" alt="hero image1" />
            </div>

            <div data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"className="space-y-6 lg:space-y-6">
              <span className="text-xs text-secondary text-center lg:text-left">Established Since 2014</span>
               <h1 className="text-primary text-4xl text-center lg:text-left md:text-5xl lg:text-4xl xl:text-6xl font-extrabold ">We've been serving 
               <span className='text-secondary '>for over 5 years.</span></h1>
               <p className="text-sm text-Gray text-center px-4 md:px-16 lg:px-0 lg:text-left font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <p className="text-sm text-Gray text-center px-4 md:px-16 lg:px-0 lg:text-left font-semibold">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Latest Offers</p>
             <div className="flex justify-center lg:justify-start ">
                <button className=" text-white py-2 px-8 bg-secondary/90 hover:bg-secondary rounded-md">Latest Offers</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTwo