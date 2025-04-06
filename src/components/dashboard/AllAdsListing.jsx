import React from 'react'
import useAds from '../../hooks/useAds'
import { Link } from 'react-router-dom'
import NoAdsFound from './NoAdsFound'

const AllAdsListing = () => {


  const {allAdds,deleteAd} = useAds()
  
  return (

    <section className="flex-1">
  <div className="mt-6 space-y-4">
    {allAdds && allAdds.length ? (
      allAdds.map((ad) => (
        <div
          key={`ad_listing_${ad.id}`}
          className="border p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          {/* Left section: Image and Info */}
          <div className="flex gap-4 flex-1">
            <img
              src={ad?.image ?? ""}
              alt="Ad Image"
              className="rounded-lg w-24 h-24 object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{ad.title}</h3>
              <p className="text-sm text-gray-500">{ad?.description}</p>
              <p className="text-lg font-bold text-gray-700 mt-1">
                ${ad.price}
              </p>
            </div>
          </div>

          {/* Right section: Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end">
            <Link replace to={`/dashboard/product/${ad.id}`}>
              <button className="bg-slate-200 border hover:bg-slate-300 text-black text-sm font-bold py-2 px-4 rounded w-full sm:w-28">
                View
              </button>
            </Link>
            <button
              onClick={() => deleteAd(ad?.id)}
              className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded w-full sm:w-28"
            >
              Delete Ad
            </button>
          </div>
        </div>
      ))
    ) : (
      <NoAdsFound />
    )}
  </div>
</section>

  )
}

export default AllAdsListing