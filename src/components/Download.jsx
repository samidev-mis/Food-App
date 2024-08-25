import React from 'react'
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <div className='overflow-hidden w-full h-[1160px] md:h-[700px] bg-blue'>
        <div className="container grid grid-cols-1 md:grid-cols-3   place-items-center place-content-center  px-2 md:px-6 lg:px-10 mt-6 sm:mt-8 lg:mt-16  2xl:px-80 2xl:mt-28">
            <div data-aos="fade-up"
             data-aos-offset="200" className="flex   flex-col md:col-span-2 gap-8">
                <div className="flex flex-col space-y-8">
                <p className='text-center md:text-left pt-4 md:pt-0 text-yellow-400 text-medium font-semibold'>Download App</p>
                <h1 className="text-center md:text-left text-3xl text-white font-bold ">People around you are ordering delicious meals using the <span className="text-secondary">Treact App.</span></h1>
                </div>
                <div className="block space-y-6 lg:space-y-0 lg:flex mt-8 gap-6">
                        <div className=" px-12 py-4 bg-white rounded-full">
                          <Link className='flex items-center justify-center gap-2' to={{ pathname: "https://www.apple.com/" }} >
                            <img width={30} height={40} src="src/assets/download (24).png" alt="" />
                            <h1 className="text-semibold text-lg text-black ">App Store </h1>
                          </Link>
                        </div>
                        <div className=" px-12 py-4 bg-white rounded-full">
                        <Link className='flex items-center justify-center  gap-2' to={{ pathname: "https://play.google.com/store/games" }} >
                            <img width={30} height={40} src="src/assets/download (25).png" alt="" />
                            <h1 className="text-semibold text-lg text-black ">Play Store </h1>
                        </Link>
                        </div>
                </div>
            </div>
            <div data-aos="fade-up"
             data-aos-offset="200" className="flex flex-col pt-16 md:col-span-1 ">
             <img className='w-[300px] h-[500px]' src={`https://treact.owaiskhan.me/static/media/app-mockup.3cdce84cf7ea691ecca9.png`} alt="" />
            </div>
        </div>
    </div>

  )
}

export default Download