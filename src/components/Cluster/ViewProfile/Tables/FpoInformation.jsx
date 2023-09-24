import React, { useState } from "react";
import Personal__information from "../../../Farmer/Settings/Personal__information";
import Purchase_History_Table from "../../../FPO/Farmer/Tables/Purchase_History_Table";

const FpoInformation = ({setFpoInfo}) => {
  const [active, setActive] = useState("tab1");
  
  const details = [
    { label: "FPO Name", value: "Sri Rama FPO" },
    { label: "Date of Incorporation", value: "18-04-1996" },
    { label: "Number of farmers", value: "1905" },
    { label: "Address", value: "9-31/3,blah,blah,blah" },
    { label: "Size of Land Owned (in Acres)", value: "10" },
    { label: "Land in Cultivation (in Acres)", value: "9" },
    { label: "Mobile Number", value: "94900XXXXX" },
    { label: "Email", value: "ramafpo@gmail.com" },
    { label: "PAN Number", value: "XXXXXXXXXX" },
    { label: "Seeds License Number", value: "ap128736/323/d22" },
    { label: "Bank Name", value: "SBI" },
    { label: "Bank Account Number", value: "XXXXXXXXXXXX" },
    { label: "IFSC Code", value: "XXXXXXXXXXXX" },
    { label: "Directors Details", value: "Mr.Ravi, 9090909090" },
  ];

  let tab__UI;
 
  if (active === "tab1") {
    tab__UI = <Personal__information details={details}/>;
  } else if (active === "tab2") {
    tab__UI = <Purchase_History_Table />;
  } 

  return (
    <>
      <button
        onClick={() => setFpoInfo(false)}
        className="bg-bg__color text-center shadow-md z-0 focus:outline-none block text-white px-4 py-1 mb-5 rounded"
      >
        Back to FPO List
      </button>

      <div className="flex mb-5 gap-2 md:gap-5 flex-wrap md:justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Fpo Profile Information
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Purchase History
        </button>
      </div>
      {tab__UI}
    </>
  );
};

export default FpoInformation;
