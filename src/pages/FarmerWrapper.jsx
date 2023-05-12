import React from 'react'
import Sidebar from '../components/Farmer/Sidebar'
import Navbar from '../components/Farmer/Navbar'
import MainContent from '../components/Farmer/MainContent'
const FarmerWrapper = () => {
  return (
    <>
      <div className='flex relative'>
        <Sidebar />
        <div className='w-full'>
          <Navbar />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default FarmerWrapper