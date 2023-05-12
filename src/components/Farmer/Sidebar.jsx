import React from 'react'
import logo from '../../assets/logo.png'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

const Sidebar = () => {
  return (
    <div className='font-Roboto bg-bg__color position-absolute w-[300px] h-screen'>
      <div className='flex flex-col items-center'>
        <img className='mx-auto pt-5' height={50} width={50} src={logo} alt="logo"/>
        <h1 className='text-white__color text-2xl font-bold'>MEITY</h1>
      </div>
      <div className='mx-auto w-[100%] my-5 '>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <HomeRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Dashboard</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <LocalGroceryStoreRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Store</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <MonetizationOnRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Selling Price</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <CreditScoreRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Loan</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <AccountBalanceWalletRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Transaction History</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <TerminalRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Training Programs</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <DashboardCustomizeRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Crop Advisory</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <SupportAgentRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Support</p>
          </div>
          <div className='flex items-center justify-start py-2.5 px-2 hover:bg-hover__color'>
            <SettingsSuggestRoundedIcon style={{color:'white',fontSize:'28px'}}/>
            <p className='text-white__color pl-1 text-[17px]'>Settings</p>
          </div>
      </div>
    </div>
  )
}

export default Sidebar