import React, { useState } from "react";
import Pending_Loans from "../Tables/Pending_Loans";
import Loan_Window from "../Tables/Loan_Window";
import Approved_Application from "../Tables/Approved_Application";
import Application_History from "../Tables/Application_History";
import Application_In_Process from "../Tables/Application_In_Process";

const Farmer_Loan = () => {
  const [active, setActive] = useState("tab1");
  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Approved_Application />;
  } else if (active === "tab2") {
    tab__UI = <Application_History />;
  } else if (active === "tab3") {
    tab__UI = <Application_In_Process />;
  } else if (active === "tab4") {
    tab__UI = <Loan_Window />;
  }
  return (
    <>
      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Approved Application
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Applications History
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Applications In Process
        </button>
        <button
          onClick={() => setActive("tab4")}
          style={{
            borderBottom: active === "tab4" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Loan Window
        </button>
      </div>
      {tab__UI}
    </>
  );
};

export default Farmer_Loan;
