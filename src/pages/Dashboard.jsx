import React from 'react'
import SideBar from '../components/dashboard/SideBar'
import MyAccount from '../components/dashboard/MyAccount'
import MyProfile from '../components/dashboard/MyProfile'
import AllAdsListing from '../components/dashboard/AllAdsListing'
import PostAd from '../components/dashboard/PostAd'
import { Outlet, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Dashboard = () => {

  const {handleLogout} = useAuth()
  const location = useLocation();
  const activepath = location?.pathname

  const checkPath = (path) => {
      return activepath.includes(path)
  }

  const renderBreadcrumps = () => {

    if(activepath.includes("account")){
      return "My Account"
    }else if(activepath.includes("profile")){
      return "My Porfile"
    }else if(activepath.includes("postad")){
      return "Post Ad"
    }else if(activepath.includes("ads")){
      return "Ads"
    }

  }


  return (
   <main className="max-w-7xl min-h-[628px] mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
  {/* Breadcrumb */}
  <nav className="text-sm text-gray-500">
    Home &gt; <span className="text-gray-700 font-semibold">{renderBreadcrumps()}</span>
  </nav>
  <div className="flex gap-6 mt-6">
    {/* Sidebar */}
   <SideBar checkPath={checkPath}/>
    <Outlet/>
  </div>
</main>

  )
}

export default Dashboard