import React, { useState } from "react";
import Active_Loans from '../Tables/Loan_Information/Active_Loans';
import Loan_History from '../Tables/Loan_Information/Loan_History'
import Loan_In_Process from '../Tables/Loan_Information/Loan_In_Process'
const Loan_Information = () => {
  const [active, setActive] = useState("tab1");
  
  let UI 
  if(active === 'tab1') {
    UI = <Active_Loans/>
  }else if(active === 'tab2'){
    UI = <Loan_History/>
  }else if(active === 'tab3'){
    UI = <Loan_In_Process/>
  }

  return (
    <div>
      <div className="flex gap-5 justify-end my-6">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Active Loans
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Loan History
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
        >
          Loan in Process
        </button>
      </div>
      {UI}
    </div>
  );
};

export default Loan_Information;
