import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Farmer_Profile from "./Tabs/Farmer_Profile";
import Fpo_Details from "../../Farmer/FPO_Details/Fpo_Details";

const ViewProfiles = () => {
  const [active, setActive] = useState("tab1");

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Farmer_Profile />;
  } else if (active === "tab2") {
    tab__UI = <Fpo_Details show={"No"} />;
  }
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
        View Profiles
      </h2>
      <div className="flex gap-3 md:gap-5 justify-end mb-5">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Farmer Profiles
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          FPO Profile
        </button>
      </div>
      {tab__UI}
    </div>
  );
};

export default ViewProfiles;
