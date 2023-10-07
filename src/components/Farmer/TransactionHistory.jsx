import React, { useState } from "react";
import Navbar from "./Navbar";
import Purchase_History from "../FPO/Farmer/Tables/Purchase_History";
import Sale_History from "../FPO/Farmer/Tables/Sale_History"
const TransactionHistory = () => {
  const [active, setActive] = useState("tab1");

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
        Transaction History
      </h2>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Purchase History
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Sale History
        </button>
      </div>
      {active === "tab1" ? <Purchase_History show={false} /> : <Sale_History show={false} />}
    </div>
  );
};

export default TransactionHistory;
