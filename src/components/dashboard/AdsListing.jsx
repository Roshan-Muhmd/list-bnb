import React from 'react'
import useAds from '../../hooks/useAds'
import { Link } from 'react-router-dom'
import NoAdsFound from './NoAdsFound'

const AdsListing = () => {

    const {allAdds} = useAds()
    

  return (
    <div className="mt-6 space-y-4">
        {allAdds && allAdds.length ? allAdds.map((ad)=>{
            return (
                <div key={`ad_lsiting_${ad.id}`} className="border p-4 rounded-lg flex items-center justify-between shadow">
          <div className="flex gap-4">
            <img src={ad?.image ?? ""} alt="Ad Image" className="rounded-lg" />
            <div>
              <h3 className="text-lg font-semibold">{ad.title}</h3>
              <p className="text-sm text-gray-500">{ad?.description}</p>
              <p className="text-lg font-bold text-gray-700">${ad.price}</p>
            </div>
          </div>
          <div className='w-auto flex justify-center'>
            <Link replace to={`/dashboard/product/${ad.id}`}><button className="bg-slate-200 borde hover:bg-slate-300 text-black text-sm font-bold mx-2 w-28 py-2 px-4 rounded">View</button></Link>
            <button onClick={()=>deleteAd(ad?.id)} className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 mx-2 w-28 rounded">Delete Ad</button>
          </div>
        </div>
            )
        }):
        <NoAdsFound/>
        }      
       
      </div>
  )
}

export default AdsListing