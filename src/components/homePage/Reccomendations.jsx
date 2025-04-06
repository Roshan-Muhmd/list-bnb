import React from 'react'
import HomeAddItem from './HomeAddItem'
import useAds from '../../hooks/useAds'

const Reccomendations = () => {

const {allAdds} = useAds()

  return (
    <section className="min-h-96 md:min-h-80 p-10 text-center">
        <h1 className="text-xl font-semibold text-[#FF5733]">WHAT'S NEW</h1>
    <h2 className="text-4xl font-semibold text-gray-700">Fresh Recommendations</h2>
    {allAdds && allAdds.length ? <div className="flex flex-row justify-start flex-wrap md:mx-20">
        {allAdds.map((adItem,index)=>{
            return <HomeAddItem key={`home_add_item_${index}`} adItem={adItem}/>
        })} 
    </div>:
    <div className="h-full flex flex-row justify-center items-center flex-wrap md:mx-20 p-10">
      No ads found. Please login to see adds
    </div>
    }
  </section>
  )
}

export default Reccomendations