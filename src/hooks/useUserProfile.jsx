import React ,{useState,useEffect} from 'react'
import { commonApiReq } from '../utils/common'

const useUserProfile = () => {

    const [userprofile, setUserprofile] = useState(null)

    const updateUser = async (userdata) => {

      const reqBody = userdata

      const getProfileRes = await commonApiReq("profile","PUT",reqBody)
      if(getProfileRes){

        alert("Profile updated succesfully")
      }
    
      
    }


    useEffect(() => {
     
        (async ()=>{
          const getProfileRes = await commonApiReq("profile","GET")
          
          if(getProfileRes){
            setUserprofile(getProfileRes)
          }
        })()
        
        
    
    }, [])
    


  return {userprofile,updateUser}
}

export default useUserProfile