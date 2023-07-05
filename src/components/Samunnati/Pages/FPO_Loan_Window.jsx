import React, { useState } from "react";
import Approved_Loan_Windows from "../Tables/Approved_Loan_Windows";
import Pending_Loan_Windows from "../Tables/Pending_Loan_Windows";
import Rejected_Loan_Windows from "../Tables/Rejected_Loan_Windows";

const FPO_Loan_Window = ({ setLoanInfo }) => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Approved_Loan_Windows setLoanInfo={setLoanInfo} />;
  } else if (active === "tab2") {
    tab__UI = <Rejected_Loan_Windows />;
  } else if (active === "tab3") {
    tab__UI = <Pending_Loan_Windows />;
  }

  return (
    <>
      <div className="flex gap-2 md:gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Approved Loan Windows
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Rejected Loan Windows
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Pending Loan Windows
        </button>
      </div>
      <div className="container flex justify-start items-center my-6 md:my-3">
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
          <input
            type="text"
            className="h-14 md:w-96 pl-10 pr-20 shadow-md rounded-lg z-0 focus:outline-none"
            placeholder="Search by FPO Name or FPO ID"
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-bg__color hover:bg-hover__color">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="py-2">{tab__UI}</div>
      </div>
    </>
  );
};

export default FPO_Loan_Window;
