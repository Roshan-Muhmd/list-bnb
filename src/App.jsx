import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/common/ProtectedRoute";
import MyAccount from "./components/dashboard/MyAccount";
import MyProfile from "./components/dashboard/MyProfile";
import AllAdsListing from "./components/dashboard/AllAdsListing";
import PostAd from "./components/dashboard/PostAd";
import ViewAdDetails from "./components/dashboard/ViewAdDetails";

function App() {


  const router = createBrowserRouter([
   { path: "/",
    element: <Layout/>,
    children : [
      { path: "/",
        element: <HomePage/>,
       }
      ,
      { path: "/login",
        element: <AuthPage/>,
       },
      { path: "/register",
        element: <AuthPage/>,
       },
      { path: "/dashboard",
        element: <ProtectedRoute><Dashboard/></ProtectedRoute>,
        children : [
        {
          index: true, 
          element: <Navigate to="account" replace />,
        },
        {
          path: "account",
          element : <MyAccount/>
        },
        {
          path: "profile",
          element : <MyProfile/>
        },
        {
          path: "ads",
          element : <AllAdsListing/>
        },
        {
          path: "postad",
          element : <PostAd/>
        },
        {
          path: "product/:id",
          element : <ViewAdDetails/>
        }
      ]
       }
    ]
   },
   

  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
