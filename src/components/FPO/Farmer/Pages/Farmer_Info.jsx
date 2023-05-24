import React, { useState } from "react";
import Accepted_Memberships from '../Tables/Accepted_Memberships'
import Rejected_Memberships from '../Tables/Rejected_Memberships'
import Pending_Applications from "../Tables/Pending_Applications";

const Farmer_Info = ({setFarmerInfo}) => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Accepted_Memberships setFarmerInfo={setFarmerInfo} />;
  } else if (active === "tab2") {
    tab__UI = <Rejected_Memberships />;
  } else if (active === "tab3") {
    tab__UI = <Pending_Applications />;
  }

  return (
    <>
      <div className="container flex justify-start items-center mb-3">
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 shadow-md rounded-lg z-0 focus:outline-none"
            placeholder="Search here..."
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-bg__color hover:bg-hover__color">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Accepted Memberships
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Rejected Memberships
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Pending Applications
        </button>
      </div>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="py-2">{tab__UI}</div>
      </div>
    </>
  );
};

export default Farmer_Info;
