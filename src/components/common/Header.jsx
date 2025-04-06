import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Header = () => {


    const {isAuthenticated,userData,handleLogout} = useAuth()
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-24 flex justify-between items-center">
      <Link to="/">
        <img src="/images/list-bnb-logo.png" alt="logo" className="h-10" />
      </Link>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-4">
        {userData ? (
          <span onClick={handleLogout} className="text-gray-700 cursor-pointer">
            Logout
          </span>
        ) : (
          <Link to="/login" className="text-gray-700">
            Sign In
          </Link>
        )}
        <Link to="/dashboard/account"><span className="text-gray-700">{userData?.username}</span></Link>
        <Link to="/dashboard/postad">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Post Your Ad
          </button>
        </Link>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-4 md:hidden z-50">
          {userData ? (
            <span
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-gray-700 cursor-pointer"
            >
              Logout
            </span>
          ) : (
            <Link to="/login" className="text-gray-700" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          )}
          <span className="text-gray-700">{userData?.username}</span>
          <Link to="/dashboard/postad" onClick={() => setMenuOpen(false)}>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full">
              Post Your Ad
            </button>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header