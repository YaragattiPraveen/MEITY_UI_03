import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Procuring from "../Lac Procurement/Tabs/Procuring";
import Not_Procuring from "./Tabs/Not_Procuring";
import Add_Lac from "./Modals/Add_Lac";
const Lac_Procurement = () => {
  const [active, setActive] = useState("tab1");
  const [openModel,setOpenModel] = useState(false);

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Procuring />;
  } else if (active === "tab2") {
    tab__UI = <Not_Procuring />;
  }

  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
          Procurement Information
        </h2>
        <div className="flex items-end justify-end pb-4">
          <button onClick={() => setOpenModel(true)} className="bg-bg__color  text-center text-white px-4 py-1 rounded">
            Add Item
          </button>
        </div>

        <div className="flex gap-5 justify-end">
          <button
            onClick={() => setActive("tab1")}
            style={{
              borderBottom: active === "tab1" && "2px solid green",
            }}
            className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
          >
            Procuring
          </button>
          <button
            onClick={() => setActive("tab2")}
            style={{
              borderBottom: active === "tab2" && "2px solid green",
            }}
            className="text-hover__color font-Roboto text-base font-bold cursor-pointer"
          >
            Not-Procuring
          </button>
        </div>
        {tab__UI}
        {openModel && <Add_Lac closemodel={setOpenModel}/>}
      </div>
    </>
  );
};

export default Lac_Procurement;
