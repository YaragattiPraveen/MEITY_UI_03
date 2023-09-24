import React, { useState } from "react";
import Profile_Information from "../../../FPO/Farmer/Tables/Profile_Information";
import Purchase_History_Table from "../../../FPO/Farmer/Tables/Purchase_History_Table";
import Sale_History_Table from "../../../FPO/Farmer/Tables/Sale_History_Table";

const FarmerInformation = ({ setFarmerInfo }) => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Profile_Information />;
  } else if (active === "tab2") {
    tab__UI = <Purchase_History_Table/>;
  } else if (active === "tab3") {
    tab__UI = <Sale_History_Table />;
  }

  return (
    <>
      <button
        onClick={() => setFarmerInfo(false)}
        className="bg-bg__color text-center shadow-md z-0 focus:outline-none block text-white px-4 py-1 mb-5 rounded"
      >
        Back to Farmer List
      </button>

      <div className="flex mb-5 gap-2 md:gap-5 flex-wrap md:justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Farmer Profile Information
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
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Sale History
        </button>
      </div>
      {tab__UI}
    </>
  );
};

export default FarmerInformation;
