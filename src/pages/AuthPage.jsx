import React, { useEffect,useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RightBox from "../components/auth/RightBox";
import RegisterForm from "../components/auth/RegisterForm";
import { useLocation } from "react-router-dom";

const AuthPage = () => {

    const location = useLocation();
    const activeForm = location?.pathname.includes("register") ? "register" : "login"

  


  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-11/12 md:w-3/4 lg:w-2/3">
        {activeForm == "login" ? 
        <LoginForm /> :
        <RegisterForm/>}
        <RightBox activeForm={activeForm}/>
      </div>
    </section>
  );
};

export default AuthPage;
