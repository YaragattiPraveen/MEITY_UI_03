import { useState } from "react";
import Available_Items from "./Tabs/Available_Items";
import Out_Of_Stock_Items from "./Tabs/Out_Of_Stock_Items";

const Fpo_Output_Market = () => {
  const [active, setActive] = useState("tab1");

  let UI;

  if (active === "tab1") {
    UI = <Available_Items btnTitle={"Buy Now"} />;
  } else if (active === "tab2") {
    UI = <Out_Of_Stock_Items btnTitle={"Buy Now"} />;
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
    </>
  );
};

export default Fpo_Output_Market;