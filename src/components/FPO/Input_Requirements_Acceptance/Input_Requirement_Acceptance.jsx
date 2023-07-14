import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Add_Requirement from "./Tabs/Add_Requirement";
import AvailableItems from "./Tabs/Available_Items";
import Not_Available_Items from "./Tabs/Not_Available_Items";
const Input_Requirement_Acceptance = () => {
  const [active, setActive] = useState("tab1")

  let displayUI
  if (active === "tab1") {
    displayUI = <Add_Requirement />
  } else if (active === "tab2") {
    displayUI = <AvailableItems />
  } else if (active === "tab3") {
     displayUI = <Not_Available_Items/>
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Requirement Acceptance
      </h2>

      <div className="flex gap-2 mb-5 md:gap-5 justify-end">
        <button
          onClick={() => {
            setActive("tab1");
          }}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Add Requirement
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Available Items
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Out of Stock Items
        </button>
      </div>
      {displayUI}
    </div>
  );
};

export default Input_Requirement_Acceptance;
