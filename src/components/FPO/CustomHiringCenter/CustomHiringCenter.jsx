import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Equipments from "./Tabs/Equipments";
import ViewBookings from "./Tabs/ViewBookings";

const CustomHiringCenter = () => {
  const [active, setActive] = useState("tab1");
  //   const { modal, closeModal, updateModal } = useModal();

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Equipments />;
  } else if (active === "tab2") {
    tab__UI = <ViewBookings />;
  }

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
        Custom Hiring Center
      </h2>
      <div className="flex gap-3 md:gap-5 justify-end ">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Equipments List
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          View Bookings
        </button>
      </div>
      {tab__UI}
    </div>
  );
};

export default CustomHiringCenter;
