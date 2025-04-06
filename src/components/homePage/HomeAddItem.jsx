import React from 'react'
import { Link } from 'react-router-dom'

const HomeAddItem = ({adItem}) => {
  return (
    <div className="bg-white hover:border hover:border-red-500 p-4 rounded-lg drop-shadow-md h-[500px] w-full md:w-[24%] flex-wrap md:mx-2 mt-5">
        <img src={adItem?.image} alt="Product" className="w-full rounded-t-md h-4/6 md:w-full" />
        <div className='h-1/3 flex flex-col justify-between p-5'>
        <p className="mt-2 text-gray-700 text-left">{adItem?.title}</p>
       
        <div className='w-full flex justify-between'>
        <p className=" w-full text-red-500 font-bold text-left">${adItem?.price}</p>
        <Link to={`/dashboard/product/${adItem?.id}`}><img className='w-7 h-7 hover:scale-125' src="/images/eye.png" alt='view ad'/></Link>
        </div>
       
        </div>
      </div>
  )
}

export default HomeAddItem