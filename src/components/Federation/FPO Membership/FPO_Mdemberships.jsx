import React, { useState } from 'react'
import Navbar from '../../Farmer/Navbar'
import FPO_Informations from './Pages/FPO_Informations'
import FPO_Details from './Pages/FPO_Details'

const FPO_Mdemberships = () => {
    const [fpoInfo,setFPOinfo] = useState(true)
    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                FPO Information
            </h2>
            {
                fpoInfo ? <FPO_Informations setFPOinfo={setFPOinfo} /> : <FPO_Details setFPOinfo={setFPOinfo} />
            }
        </div>
    )
}

export default FPO_Mdemberships