import { useState } from "react";
import Ongoing_Products_Transactions from "./Ongoing_Products_Transactions"
import Completed_Product_Transactions from "./Completed_Product_Transactions"
const Open_Market_Trasactions = () => {
  const [active, setActive] = useState("tab1");

  let tab_UI;
  if (active === "tab1") {
    tab_UI =  <Ongoing_Products_Transactions />
  } else if (active === "tab2") {
    tab_UI = <Completed_Product_Transactions />
  }

  return (
    <>
      <div className="flex gap-3 md:gap-5 justify-between md:justify-start py-2 ">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Ongoing Transactions
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Completed Transactions
        </button>
      </div>
      {tab_UI}
    </>
  );
};

export default Open_Market_Trasactions;
