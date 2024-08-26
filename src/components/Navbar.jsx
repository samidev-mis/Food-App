import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const Menu = [
        {
            id:1,
            title: "Home",
            link: "/"
        },
        {
            id:2,
            title: "About",
            link: "/"
        },
        {
            id:3,
            title: "Blog",
            link: "/",
        },
        {
            id:4,
            title: "Pricing",
            link: "/"
        },
        {
            id:5,
            title: "Contact Us",
            link: "/"
        },
    ]

    const [open, SetOpen] = useState(false);
    const toggleNavbar = () => {
        SetOpen(!open)
    }; 

    const linkClass = ({isActive}) => 
        isActive ? "text-primary  decoration-2 duration-200  hover:text-secondary hover:underline hover:underline-offset-8 " : " text-primary "
    

  return (
    <div className=' w-full  p-4 bg-white/90 fixed top-0 right-0 z-30 drop-shadow-xl'>
        <div 
      className="container flex items-center justify-between">
                <div  data-aos="fade-right"
                data-aos-offset="300" className='flex gap-2 items-center'>
                    <img src="public/logo.svg" alt="logo" width={45} height={45} />
                    <h1 className='font-bold text-primary text-2xl hover:text-secondary'>Treact</h1>
                </div>
                <div  data-aos="fade-left" data-aos-offset="300" className='hidden lg:flex items-center space-x-8'>
                    <ul className='flex items-center justify-center space-x-10 text-primary text-sm font-semibold '>
                        {
                        Menu.map((menu) => (
                            <li  to={menu.link} key={menu.id}>
                            <NavLink className={linkClass}>{menu.title}</NavLink>
                            </li>
                        ))
                        }
                       
                    </ul>
                    <div className="flex items-center justify-center space-x-5">
                    <button className="text-primary text-sm font-semibold hover:underline decoration-2 duration-200 hover:underline-offset-8 hover:text-secondary">Login</button>
                    <button className="px-8 py-2 bg-secondary/85 hover:bg-secondary text-white font-semibold text-sm rounded-md">Sign Up</button>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300" className="flex lg:hidden">
                    <button className='hover:bg-secondary/95 text-2xl bg-secondary text-white p-1 rounded-sm font-semibold' onClick={toggleNavbar}>
                    {open ? <FaX /> : <RxHamburgerMenu />}
                    </button>
                </div>
        </div>
        {
          open && (
            <div className='w-full fixed right-0 lg:hidden bg-BlueWhite/70 h-[58vh]'>
                <div className="mt-5">
                <ul className='flex flex-col items-center justify-center  text-primary text-lg font-semibold '>
                       <li className='py-1'><NavLink className={linkClass}>Home</NavLink></li>
                       <li className='py-1'><NavLink to="/about" className={linkClass}>About</NavLink></li>
                       <li className='py-1'><NavLink  className={linkClass}>Blog</NavLink></li>
                       <li className='py-1'><NavLink  className={linkClass}>Pricing</NavLink></li>
                       <li className='py-1'><NavLink  className={linkClass}>Contact Us</NavLink></li>
                       
                    </ul>
                </div>
                <div className="flex items-center justify-center space-x-5 mt-4">
                    <button className="text-primary text-sm font-semibold hover:underline decoration-2 duration-200 hover:underline-offset-8 hover:text-secondary">Login</button>
                    <button className="px-8 py-2 bg-secondary/85 hover:bg-secondary text-white font-semibold text-sm rounded-md">Sign Up</button>
                    </div>
            </div>
          ) 
        }
    </div>
  )
}

export default Navbar