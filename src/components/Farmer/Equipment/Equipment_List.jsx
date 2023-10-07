import { useState } from "react";
import AvailableEquipments from "./Tabs/AvailableEquipments";
import AvailableBookingSlots from "./Tabs/AvailableBookingSlots";
import Navbar from "../Navbar";

const Equipment_List = () => {
  const [active, setActive] = useState("tab1");
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <div className="flex gap-2 justify-end py-4">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          Available Equipments
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
        >
          View Bookings
        </button>
      </div>
      {active === "tab1" ? <AvailableEquipments /> : <AvailableBookingSlots />}
    </div>
  );
};

export default Equipment_List;
