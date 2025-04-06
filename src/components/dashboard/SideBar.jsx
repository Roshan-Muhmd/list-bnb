import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const SideBar = ({checkPath}) => {

   const {handleLogout} = useAuth()

  return (
    <aside className="w-1/4 h-fit bg-gray-50 p-4 rounded-lg">
    <ul className="flex flex-col justify-between space-y-4 text-gray-700">
      <li><Link to="/dashboard/account" className={`sidebar-item ${checkPath("account")? 'active' :"" }`}>My Account</Link></li>
      <li><Link to="/dashboard/profile" className={`sidebar-item ${checkPath("profile")? 'active' :"" }`}>Profile</Link></li>
      <li><Link to="/dashboard/ads" className={`sidebar-item ${checkPath("ads")? 'active' :"" }`}>Ads</Link></li>
      <li><Link to="/dashboard/postad" className={`sidebar-item ${checkPath("postad")? 'active' :"" }`}>Post Ad</Link></li>
      <li><Link onClick={handleLogout}  className="sidebar-item">Logout</Link></li>
    </ul>
  </aside>
  )
}

export default SideBar