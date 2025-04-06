import React from 'react'
import SideBar from '../components/dashboard/SideBar'
import MyAccount from '../components/dashboard/MyAccount'
import MyProfile from '../components/dashboard/MyProfile'
import AllAdsListing from '../components/dashboard/AllAdsListing'
import PostAd from '../components/dashboard/PostAd'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
   <main className="max-w-7xl min-h-[628px] mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
  {/* Breadcrumb */}
  <nav className="text-sm text-gray-500">
    Home &gt; <span className="text-gray-700 font-semibold">My Profile</span>
  </nav>
  <div className="flex gap-6 mt-6">
    {/* Sidebar */}
   <SideBar/>
    <Outlet/>
  </div>
</main>

  )
}

export default Dashboard