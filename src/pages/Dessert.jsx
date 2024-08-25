import React from 'react'
import Data from '../Data/DessertData'
import { FaStar } from 'react-icons/fa'
const Starter = () => {
  return (
    <div className='container w-full'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-x-72 place-content-center place-items-center">
        {Data.map((data) => (
          <div key={data.id} className='relative w-[280px] h-[400px] bg-BlueWhite '>
             <div data-aos="fade-up"
             data-aos-offset="200" className="">
             <img className='rounded-t-md w-[280px] h-[280px] object-cover object-center ' src={data.image} alt="image data" />
             </div>
             <div data-aos="fade-up"
             data-aos-offset="200" className="absolute top-52 left-5">
              <span className='flex items-center gap-2 text-white text-xl bg-BlueWhite rounded-full px-1 '>
                <FaStar className='text-yellow-500 ' />
                <p className='text-[16px] font-semibold text-primary'>{data.rating}</p>
                <p className='text-sm text-primary'>{data.rate}</p>
                </span>
             </div>
             <div data-aos="fade-up"
             data-aos-offset="200" className="flex flex-col space-y-2 pl-4 pt-2">
              <h1 className="text-black text-lg font-semibold">{data.h1}</h1>
              <p className="text-Gray text-sm font-normal ">{data.p}</p>
              <span className="text-black text-lg font-semibold">{data.pricing}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Starter