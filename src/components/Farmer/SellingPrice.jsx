import React, { useState } from "react";
import Navbar from "./Navbar";
import SellToFpo from "./SellToFpo";
import Produce from "./Produce";
const SellingPrice = () => {
  const [active, setActive] = useState("tab1");

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Selling Price
      </h2>
      <div className="flex gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Sell to FPO
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Enter Your Produce
        </button>
      </div>
      {active === "tab1" ? <SellToFpo /> : <Produce />}
    </div>
  );
};

export default SellingPrice;
