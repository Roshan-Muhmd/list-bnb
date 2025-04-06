import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import useAds from '../../hooks/useAds'

const ViewAdDetails = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)

    const {id} = useParams()
    const {getAdDetails} = useAds()

    useEffect(() => {
       (async()=>{
        const detailsRes =  await getAdDetails(id)
        setSelectedProduct(detailsRes)
        debugger
    })()
    }, [id])
    

    
  return (
    <main className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{selectedProduct?.title}</h1>
      <p className="text-gray-600 text-sm mb-4">New York, United States | Nov 01, 2023, 10:00 am</p>
      <div className="mb-4">
        <img src={selectedProduct?.image} alt="Apple MacBook Air" className="rounded-lg w-full" />
      </div>
     
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          {selectedProduct?.description}
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
        {selectedProduct?.description}
        </p>
      </div>
    </div>
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-3xl font-bold text-red-500 mb-4">${selectedProduct?.price}</p>
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/50x50?text=Seller" alt="Seller" className="rounded-full mr-3" />
          <div>
            <p className="text-gray-800 font-semibold">Astonix D. Dowson</p>
            <p className="text-gray-600 text-sm">Member since: 24.2000</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md w-full mb-4">Show me</button>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-700 mb-2">Contact Info:</p>
          <p className="text-gray-800 font-medium">+88 xxxxxxxx</p>
          <p className="text-gray-800 font-medium">info@xxxxxxx.xx</p>
        </div>
      </div>
    </div>
  </div>
</main>

  )
}

export default ViewAdDetails