import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Farmer_Info from "./Pages/Farmer_Info";
import Farmer_Details from "./Pages/Farmer_Details";

const Farmer_Information = () => {
  const [farmerInfo,setFarmerInfo] = useState(false)

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Farmer Information
      </h2>
      {farmerInfo ? <Farmer_Details setFarmerInfo={setFarmerInfo}/> : <Farmer_Info setFarmerInfo={setFarmerInfo}/>}
    </div>
  );
};

export default Farmer_Information;
