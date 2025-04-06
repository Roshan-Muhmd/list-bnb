import React from 'react'
import AdsListing from './AdsListing'
import ProfileCard from './ProfileCard'

const MyAccount = () => {


  return (
    <section className="container min-[628px] flex-1">
      {/* Profile Card */}
      <ProfileCard/>
      {/* Ads List */}
      <AdsListing/>
    </section>
  )
}

export default MyAccount