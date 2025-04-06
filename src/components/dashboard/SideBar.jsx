import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {

    const {handleLogout} = useAuth()
    const location = useLocation();
    const activepath = location?.pathname

    const checkPath = (path) => {
        return activepath.includes(path)
    }

  return (
    <aside className="w-1/4 bg-gray-50 p-4 rounded-lg">
    <ul className="space-y-4 text-gray-700">
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