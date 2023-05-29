import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import List_Of_Available_items from "./Tabs/List_Of_Available_items";
import List_of_Out_of_Stocks from "./Tabs/List_of_Out_of_Stocks";
import { Add_Item } from "./Modals/Add_Item";

const Fpo_Store = () => {
  const [active, setActive] = useState("tab1");
  const [openModel,setOpenModel] = useState(false);

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <List_Of_Available_items />;
  } else if (active === "tab2") {
    tab__UI = <List_of_Out_of_Stocks />;
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        FPO Store Information
      </h2>
      <div className="flex items-end justify-end pb-4">
        <button onClick={() => setOpenModel(true)} className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded">
          Add Item
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
          List of Available Items
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          List of Out of Stock Items
        </button>
      </div>
      {tab__UI}
      {openModel && <Add_Item closemodel={setOpenModel}/>}
    </div>
  );
};

export default Fpo_Store;
