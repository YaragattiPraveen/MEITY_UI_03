import React, { useState } from "react";
import Profile from "../Tables/Profile";
import Loan_History from "../Tables/Loan_History";
import Ongoing_Loans from "../Tables/Ongoing_Loans";
import Pending_Loans from "../Tables/Pending_Loans";

const FPO_Loan_Requests = ({ setLoanInfo }) => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Profile />;
  } else if (active === "tab2") {
    tab__UI = <Loan_History />;
  } else if (active === "tab3") {
    tab__UI = <Ongoing_Loans />;
  } else if (active === "tab4") {
    tab__UI = <Pending_Loans />;
  }

  return (
    <>
      <button
        onClick={() => setLoanInfo(false)}
        className="bg-bg__color text-center shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 block text-white px-4 py-1 rounded"
      >
        Back to FPO Loan Page
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
          Loan History
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Ongoing Loans
        </button>
        <button
          onClick={() => setActive("tab4")}
          style={{
            borderBottom: active === "tab4" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Pending Loans
        </button>
      </div>
      {tab__UI}
    </>
  );
};

export default FPO_Loan_Requests;
