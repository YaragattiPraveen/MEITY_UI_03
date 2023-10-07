import React, { useState } from "react";
import Available_Items from "../../CorporateClient/Tabs/Available_Items";
import Out_Of_Stock_Items from "../../CorporateClient/Tabs/Out_Of_Stock_Items";
import useModal from "../../hooks/useModal";
import EditCard from "./Modal/EditCard";

const Fpo_Output_Market = () => {
  const [active, setActive] = useState("tab1");
  const { modal, closeModal, updateModal } = useModal()
  let UI;

  if (active === "tab1") {
    UI = <Available_Items btnTitle={"Edit"} />;
  } else if (active === "tab2") {
    UI = <Out_Of_Stock_Items btnTitle={"Edit"} />;
  }
  return (
    <>
      <div className="flex items-end justify-start py-4">
        <button onClick={() => updateModal("AddItem")} className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded">
          Add Item
        </button>
      </div>
      <div className="flex gap-3 md:gap-5 justify-between md:justify-end py-2 ">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Available Items
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Out of Stock Items
        </button>
      </div>
      {UI}
      {
        modal.state === 'AddItem' && <EditCard title={"Add"} handleClose={closeModal} />
      }
    </>
  );
};

export default Fpo_Output_Market;
