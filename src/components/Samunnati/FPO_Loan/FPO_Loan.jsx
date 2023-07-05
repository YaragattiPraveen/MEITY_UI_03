import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import FPO_Loan_Window from "../Pages/FPO_Loan_Window";
import FPO_Loan_Requests from "../Pages/FPO_Loan_Requests";

const FPO_Loan = ({heading="FPO"}) => {
  const [loanInfo, setLoanInfo] = useState(false);
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        {loanInfo ? `${heading} Loan Requests` :`${heading} Loan Window`}
      </h2>
      {loanInfo ? (
        <FPO_Loan_Requests setLoanInfo={setLoanInfo} />
      ) : (
        <FPO_Loan_Window setLoanInfo={setLoanInfo} />
      )}
    </div>
  );
};

export default FPO_Loan;
