import React, {useState,useEffect} from 'react'
import { commonApiReq } from '../utils/common'

const useAds = (reset) => {

    const [allAdds, setAllAdds] = useState([])

    const postAd = async (adData) => {

        const reqBody = adData
        const postadRes = await commonApiReq("advertisements","POST",reqBody)
        if(postadRes){
            alert("Ad posted succesfully")
        }
        reset()
         
    }

    const deleteAd = async (id) => {

        const postadRes = await commonApiReq(`advertisements/${id}`,"DELETE")
        getAds()
         
    }

    const getAds = async () => {
        const addsResponse = await commonApiReq("advertisements","GET")
        if(addsResponse){

            setAllAdds(addsResponse)
        }
        
    }

    const getAdDetails = async (id) => {
        const adDetailRes = await commonApiReq(`advertisements/${id}`,"GET")
        return adDetailRes
    }

    useEffect(() => {

        if(allAdds.length === 0){
            getAds()
        }
           
        }, [])

  return {allAdds,postAd,deleteAd,getAdDetails}
}

export default useAds