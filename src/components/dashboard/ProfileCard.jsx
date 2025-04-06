import React from 'react'
import useAuth from '../../hooks/useAuth'
import useUserProfile from '../../hooks/useUserProfile'
import { Link } from 'react-router-dom'

const ProfileCard = () => {

const {userprofile} = useUserProfile() 

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <img src="https://via.placeholder.com/60" alt="User" className="rounded-full w-16 h-16" />
    <div className="text-center sm:text-left">
      <h2 className="text-lg font-semibold">
        {userprofile?.firstName ?? userprofile?.username} {userprofile?.lastName}
      </h2>
      <p className="text-sm text-gray-500">Member since 2019</p>
      <p className="text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        📍 {userprofile?.location ?? ""} 
        <span className="hidden sm:inline">|</span> 📧 {userprofile?.email ?? ""} 
        <span className="hidden sm:inline">|</span> 📞 {userprofile?.phone ?? ""}
      </p>
    </div>
  </div>
  <div className="text-center sm:text-right">
    <Link replace to="/dashboard/profile">
      <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 w-full sm:w-auto">Edit Profile</button>
    </Link>
  </div>
</div>

  )
}

export default ProfileCard