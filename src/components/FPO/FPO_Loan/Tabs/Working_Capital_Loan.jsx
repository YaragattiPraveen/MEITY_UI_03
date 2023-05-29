import React, { useState } from "react";
import Approved_Loans from "../Tables/Approved_Loans";
import Rejected_Loans from "../Tables/Rejected_Loans";
import Pending_Loans from "../Tables/Pending_Loans";
import Loan_Window from "../Tables/Loan_Window";

const Working_Capital_Loan = () => {
  const [active, setActive] = useState("tab1");
  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Approved_Loans />;
  } else if (active === "tab2") {
    tab__UI = <Rejected_Loans />;
  } else if (active === "tab3") {
    tab__UI = <Pending_Loans />;
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
          Approved Loans
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Rejected Loans
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Pending Loans
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

export default Working_Capital_Loan;
