import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Loans_Approved_By_Samunnati from "./Tabs/Loans_Approved_By_Samunnati";
import Loan_History from "./Tabs/Loan_History_Table";
import Set_Interest_Rate_Modal from "./Modals/Set_Interest_Rate_Modal";
import Toggle_Switch from "./Toggle_Switch";
const Farmer_Loan = () => {
  const [active, setActive] = useState("tab1");
  const [openModel, setOpenModel] = useState(false);

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Loans_Approved_By_Samunnati />;
  } else if (active === "tab2") {
    tab__UI = <Loan_History />;
  }
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Farmer Loan Information
      </h2>
      <div className="flex items-end justify-between pb-4">
        <div>
          <Toggle_Switch/>
        </div>
        <button
          onClick={() => setOpenModel(true)}
          className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded"
        >
          Set Interest Rate
        </button>
      </div>

      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Loans Approved by Samunnati
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
      </div>
      {tab__UI}
      {openModel && <Set_Interest_Rate_Modal closemodel={setOpenModel} />}
    </div>
  );
};

export default Farmer_Loan;
