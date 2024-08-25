import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Checkout = () => {
   

    const linkClass = ({isActive}) => 
        isActive
      ? " px-2 py-2 bg-secondary text-white rounded-md " : " hover:bg-gray-400 hover:bg-gray-300 text-slate-400 hover:text-slate-600 px-3 py-2"

  return (
    <div className='overflow-y-hidden flex overflow-x-hidden justify-center px-2 md:px-6 lg:px-10  mt-6 sm:mt-10 lg:mt-16 2xl:px-96 2xl:mt-28'>
        <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 space-y-6 lg:space-y-0 lg:space-x-16 place-items-center ">
            <div data-aos="fade-right"
                data-aos-offset="100" className="">
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-primary font-extrabold">Checkout our <span className='text-secondary'>menu.</span></h1>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="100" className="px-0 md:px-36 lg:px-1 ">
              <ul className='grid grid-cols-2 px-6 md:px-0 md:grid-cols-4  space-x-1   py-2 w-[300px] md:w-[400px] xl:w-[440px] bg-BlueWhite  '>
                <NavLink to="/" className={linkClass}><li className='text-center text-base font-semibold'>Starters</li></NavLink>
                <NavLink to="/main" className={linkClass}><li className='text-center text-base font-semibold'>Main</li></NavLink>
                <NavLink to="/soup" className={linkClass}><li className='text-center text-base  font-semibold'>Soup</li></NavLink>
                <NavLink to="dessert" className={linkClass}><li className='text-center text-base font-semibold'>Desserts</li></NavLink>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Checkout