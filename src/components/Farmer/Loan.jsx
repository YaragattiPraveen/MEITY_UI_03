import React, { useState } from "react";
import Navbar from "./Navbar";
import Granted_Loans from "./Tables/Granted_Loans";
import Rejected_Loans from "./Tables/Rejected_Loans";
import Loan_In_Process from "./Tables/Loan_In_Process";
import Apply_Loan from "./Modals/Apply_Loan";

const Loan = () => {
  const [active, setActive] = useState("tab1");
  const [openModel, setOpenModel] = useState(false);

  let loanUI;
  if (active === "tab1") {
    loanUI = <Granted_Loans />;
  } else if (active === "tab2") {
    loanUI = <Rejected_Loans />;
  } else if (active === "tab3") {
    loanUI = <Loan_In_Process />;
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Apply for loan
      </h2>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setOpenModel(true);
          }}
          className="text-white font-Roboto mb-6 py-2 px-5 bg-hover__color"
        >
          Apply Loan
        </button>
      </div>
      <div className="flex gap-5 justify-end">
        <button
          onClick={() => {
            setActive("tab1");
          }}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Granted Loans
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Rejected Loans
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Loan in process
        </button>
      </div>
      {loanUI}
      {openModel && <Apply_Loan closemodel={setOpenModel} />}
    </div>
  );
};

export default Loan;
