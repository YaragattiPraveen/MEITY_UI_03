import React, { useState } from "react";
import Profile_Information from "../Tables/Profile_Information";
import Loan_Information from "../Tables/Loan_Information";
import Purchase_History from "../Tables/Purchase_History";
import Sale_History from "../Tables/Sale_History";

const Farmer_Details = ({ setFarmerInfo }) => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Profile_Information />;
  } else if (active === "tab2") {
    tab__UI = <Loan_Information />;
  } else if (active === "tab3") {
    tab__UI = <Purchase_History />;
  } else if (active === "tab4") {
    tab__UI = <Sale_History />;
  }

  return (
    <>
      <button
        onClick={() => setFarmerInfo(false)}
        className="bg-bg__color text-center shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 block text-white px-4 py-1 rounded"
      >
        Back to Farmer Page
      </button>

      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Profile Information
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Loan Information
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Purchase History
        </button>
        <button
          onClick={() => setActive("tab4")}
          style={{
            borderBottom: active === "tab4" && "2px solid green",
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

export default Farmer_Details;
