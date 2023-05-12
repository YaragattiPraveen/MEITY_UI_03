import React from 'react'
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';

const Navbar = () => {
  return (
    <div className='bg-nav__bg__color py-4 w-10/12 mx-auto rounded-b-xl'>
      <div className='flex items-center justify-between px-8'>
        <div></div>
        <div className='flex items-center'>
          <h1 className='bg-bg__color font-Roboto py-1.5 px-3 rounded-full text-white__color'>S</h1>
          <div className='flex justify-center px-4 flex-col'>
            <p className='font-semibold text-silver__color font-Roboto'>Jack Grealish</p>
            <span className='text-[14px] font-medium text-silver__color font-Roboto'>Admin</span>
          </div>
          <NotificationsActiveRoundedIcon style={{fontSize:"30"}} className='text-silver__color font-Roboto' />
        </div>
      </div>
    </div>
  )
}

export default Navbar