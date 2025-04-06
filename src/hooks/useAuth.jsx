import React,{useState,useEffect} from 'react'
import { commonApiReq } from '../utils/common';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

    
    const storageUserData = JSON.parse(localStorage.getItem("userData"))
    const [isAuthenticated, setIsAuthenticated] = useState(storageUserData ? true : false);
    const [userData, setUserData] = useState(storageUserData ?? null)
    const navigate = useNavigate()
debugger
    const handleLogin = async (formData) => {
        const reqBody = {
            identifier: formData.username,
            password: formData.password
        }
        const loginResponse =  await commonApiReq("auth/local","POST",reqBody,false)
        
        if(loginResponse){

            updateLoginData(loginResponse)
        }
        
        
    }
    const handleRegister = async (formData) => {

        const { username, password, email } = formData;
        const reqBody = { username, password, email };
        const registerResponse = await commonApiReq("auth/local/register","POST",reqBody,false)
        if(registerResponse){

            updateLoginData(registerResponse)
        }

        
    }
    const handleLogout = (e) => {
        e.preventDefault()
        Cookies.remove("token")
        localStorage.removeItem("userData")
        setIsAuthenticated(false)
        setUserData(null)
        navigate("/")
    }

    const updateLoginData = (data) =>{
        debugger
        Cookies.set("token",data?.jwt,{ expires: 7 })
        localStorage.setItem("userData",JSON.stringify(data?.user))
        setUserData(data?.user)
        navigate("/dashboard")
        setIsAuthenticated(true)
    }

  
    
    return {isAuthenticated,userData,handleLogin,handleRegister,handleLogout }
    
  
}

export default useAuth