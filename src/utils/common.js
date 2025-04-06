import Cookies from "js-cookie";

export const commonApiReq = async (
  url,
  method = "GET",
  reqBody = "",
  authProtected = true
) => {
  try {
    
    const token = authProtected ? Cookies.get("token") : null;
    const reqUrl = `${import.meta.env.VITE_API_URL}api/${url}`;
    const headers = {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    };
   
    if(authProtected){
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options = {
      method,
      headers
    }

    if(method !== "GET") {
      options.body = JSON.stringify(reqBody)
    }

    const response = await fetch(reqUrl, options);
    const processedRes = await response.json()

if(processedRes.error){
     
      alert(processedRes?.error?.message)
      return false
  }

    if (!processedRes) {
      console.log("API request failed");
      return false;
    }

    return processedRes
  } catch (error) {
    console.log("API request error : ", error);
    return false;
  }
};
