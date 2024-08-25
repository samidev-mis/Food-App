import React from 'react'

const  Customer = () => {
  const Customers = [
    {
      id:1,
      images: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      h1: "- Charlotte Hale"
    },
    {
      id:2,
      images: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      h1: "- Adam Cuppy"
    },
    {
      id:3,
      images: "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      h1: "- Steven Marcetti"
    },
  ]
  return (
    <div className='flex  container flex-col justify-center items-center py-6 mt-14 overflow-hidden '>
        <h1  data-aos="fade-up"
             data-aos-offset="100" className=" text-4xl text-center md:text-4xl lg:text-5xl font-extrabold text-primary">Customers <span className='text-secondary'> Love Us.</span> </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
           {
            Customers.map((customer) => (
              <div key={customer.id}  data-aos="fade-up"
              data-aos-offset="200" className='flex flex-col justify-center items-center space-y-8'>
                <img className='w-20 h-20 rounded-full' src={customer.images} alt="image" />
                <p className="text-Gray/70 font-semibold text-center leading-loose">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."</p>
                <h1 className="">{customer.h1}</h1>
              </div>
            ))
           }
        </div>
    </div>
  )
}

export default Customer