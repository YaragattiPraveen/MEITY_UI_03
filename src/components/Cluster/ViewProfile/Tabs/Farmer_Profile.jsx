import React, { useState } from "react";
import FarmerList from "../Tables/FarmerList";
import FarmerInformation from "../Tables/FarmerInformation";

const Farmer_Profile = () => {
  const [farmerInfo, setFarmerInfo] = useState(false);
  return (
    <>
      {farmerInfo ? (
        <FarmerInformation setFarmerInfo={setFarmerInfo} />
      ) : (
        <FarmerList setFarmerInfo={setFarmerInfo} />
      )}
    </>
  );
};

export default Farmer_Profile;
