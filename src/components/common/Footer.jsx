import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center bg-black text-white text-center p-2">
       <img className='h-fit ml-8' src='/images/logo_white.png'/>
       <span className='text-red-500 ml-8 text-xl'>|</span>
      <span className='ml-8'>Copyright ©2024 </span>
  </footer>
  )
}

export default Footer