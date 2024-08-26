import React from 'react'

const Footer = () => {
  return (
    <div className='flex overflow-hidden px-2 bg-[rgb(237,242,247)]  md:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-16  2xl:px-80 2xl:pt-28 h-[590px]  lg:h-60 xl:h-[600px]'>
        <div className="sm:container grid grid-cols-1 lg:grid-cols-2 gap-6 xl:grid-cols-3 pt-5 ">
            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"  data-aos-offset="200" className="grid grid-cols-2 md:grid-cols-4  xl:col-span-2 place-items-center place-content-center">
                <div className="flex flex-col">
                    <h1 className="text-gray-600 uppercase text-medium font-bold ">Main</h1>
                    <ul className='flex flex-col mt-5 space-y-2'>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Blog</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>FAQs</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Support</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>About Us</li>
                    </ul>
                </div>
                <div className="">
                <h1 className="text-gray-600 uppercase text-medium font-bold">Product</h1>
                    <ul className='flex flex-col mt-5 space-y-2'>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Log In</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Personal</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Business</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Team</li>
                    </ul>
                </div>
                <div className="">
                <h1 className="text-gray-600 uppercase text-medium font-bold">Press</h1>
                    <ul className='flex flex-col mt-5 space-y-2'>
                        <li className=' cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Logos</li>
                        <li className=' cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Events</li>
                        <li className=' cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Stories</li>
                        <li className=' cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Office</li>
                    </ul>
                </div>
                <div className="">
                <h1 className="text-gray-600 uppercase text-medium font-bold">Legal</h1>
                    <ul className='flex flex-col mt-5 space-y-2'>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>GDPR</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Privacy Policy</li>
                        <li className='cursor-pointer text-sm text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Terms of Service</li>
                        <li className='cursor-pointer text-sm font-medium text-Gray hover:underline hover:underline-offset-8 hover:text-gray-600 decoration-2'>Disclaimer</li>
                    </ul>
                </div>
            </div>

            <div data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"  data-aos-offset="200" className=" flex flex-col xl:col-span-1 sm:justify-center sm:items-center ">
                <h1 className="text-Gray text-xl font-semibold pb-4">Subscribe to our Newsletter</h1>
                <p className="text-gray-500 text-center text-xs font-semibold">We deliver high quality blog posts written by professionals weekly. And we promise no spam.</p>
              <div className="flex items-center h-10 py-0 mt-5 w-[200px] md:w-[340px] bg-[rgb(226,232,240)] rounded-md border-2 hover:border-secondary border-gray-300">
                <input className='outline-none bg-[rgb(226,232,240)] text-left pl-4  w-[180px] md:w-[340px] ' type="text" placeholder='YourEmail Address' />
                <div className=" py-2 px-4 md:px-6 bg-secondary rounded-tr-md rounded-br-md">
                   <button className='text-center text-white text-sm'>Subscribe</button>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Footer