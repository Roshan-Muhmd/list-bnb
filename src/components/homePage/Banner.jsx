import React from 'react'

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
    <div className="md:w-full">
      <img src="/images/banner.svg" alt="Hero Image" className="w-full rounded-lg shadow-md" />
    </div>
  </section>
  )
}

export default Banner