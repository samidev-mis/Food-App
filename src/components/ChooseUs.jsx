import React from 'react'

const HeroTwo = () => {
  return (
    <div className='flex justify-center px-2 md:px-6 lg:px-10 mt-6 sm:mt-8 lg:mt-16  2xl:px-80 2xl:mt-28'>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 lg:space-y-0 lg:space-x-10">
           

            <div data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"className="space-y-6 lg:space-y-6">
              <span className="text-xs text-secondary text-center lg:text-left">A Reputed Brand</span>
               <h1 className="text-primary text-4xl text-center lg:text-left md:text-5xl lg:text-4xl xl:text-6xl font-extrabold ">Why 
               <span className='text-secondary '>Choose Us ?</span></h1>
               <p className="text-lg text-Gray/80 text-center px-4 md:px-16 lg:px-0 lg:text-left font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-content-center place-items-center">
                <div className="">
                    <h1 className='text-primary text-2xl font-semibold'>94000+</h1>
                    <p className='text-secondary text-lg font-medium'>Orders</p>
                </div>
                <div className="">
                    <h1 className='text-primary text-2xl font-semibold'>11000+</h1>
                    <p className='text-secondary text-lg font-medium'>Customers</p>
                </div>
                <div className="">
                    <h1 className='text-primary text-2xl font-semibold'>1500+</h1>
                    <p className='text-secondary text-lg font-medium'>Chefs</p>
                </div>
                <div className=""></div>
            </div>
             <div className="flex justify-center lg:justify-start ">
                <button className=" text-white py-2 px-8 bg-secondary/90 hover:bg-secondary duration-100 rounded-md">Order Now</button>
             </div>
            </div>

            <div data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine" className="flex justify-center items-center">
                <img className='rounded-2xl object-cover   ' src="src/assets/photo.avif" alt="hero image1" />
            </div>
        </div>
    </div>
  )
}

export default HeroTwo