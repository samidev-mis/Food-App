import React from 'react'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

const HeroOne = () => {
  return (
    <div className='flex justify-center px-2 md:px-6 lg:px-10  mt-10 sm:mt-28 lg:mt-36 2xl:px-96 2xl:mt-40'>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 lg:space-y-0 lg:space-x-10">
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
                className="space-y-8 lg:space-y-9 xl:space-x-10">
              <div className=" space-y-6">
              <h1 className="text-primary text-4xl text-center lg:text-left md:text-5xl lg:text-4xl  xl:text-6xl font-extrabold ">Delicious & Affordable <span className='text-secondary '> Meals Near You.</span></h1>
              <p className="text-sm text-Gray text-center  lg:text-left font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
             <div className="grid grid-cols-1 md:grid-cols-2  gap-5 px-10 lg:px-0  lg:pr-8 ">
                <button className=" text-white py-2 px-8 bg-secondary/90 hover:bg-secondary rounded-md">Order Now</button>
                <span className='flex items-center gap-3 text-Gray hover:text-secondary '><MdOutlineSlowMotionVideo className='text-4xl' /><button className="text-lg"> Meet The Chefs</button></span>
             </div>
            </div>
            <div  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" className="flex justify-center">
                <img className='rounded-2xl  ' src="public/heroimage1.avif" alt="hero image1" />
               
            </div>
        </div>
    </div>
  )
}

export default HeroOne