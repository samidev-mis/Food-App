import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Starter from '../pages/Starter'
import Soup from '../pages/Soup'
import Dessert from '../pages/Dessert'

const CheckSection = () => {
  return (
  
        <div className='flex overflow-hidden  items-center  px-2 md:px-6 lg:px-10  mt-6 sm:mt-10 lg:mt-16 2xl:px-96 2xl:mt-28'>
        <Routes>
            <Route path='/' element={<Starter />} />
            <Route path='/main' element={<Main />} />
            <Route path='/soup' element={<Soup />} />
            <Route path='/dessert' element={<Dessert />} />
        </Routes>
    </div>
  )
}

export default CheckSection