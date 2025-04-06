import React from 'react'
import useAuth from '../../hooks/useAuth'
import useUserProfile from '../../hooks/useUserProfile'
import { Link } from 'react-router-dom'

const ProfileCard = () => {

const {userprofile} = useUserProfile() 

  return (
    <div className="bg-gray-50 p-6 rounded-lg flex justify-between items-center shadow">
        <div className="flex items-center gap-4">
          <img src="https://via.placeholder.com/60" alt="User" className="rounded-full" />
          <div>
            <h2 className="text-lg font-semibold"> {userprofile?.firstName ?? userprofile?.username} {userprofile?.lastName}</h2>
            <p className="text-sm text-gray-500">Member since 2019</p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              📍 {userprofile?.location ?? ""} | 📧 {userprofile?.email ?? ""} | 📞 {userprofile?.phone ?? ""}
            </p>
          </div>
        </div>
        <Link replace to="/dashboard/profile"><button className="border px-4 py-2 rounded-lg hover:bg-gray-100">Edit Profile</button></Link>
      </div>
  )
}

export default ProfileCard