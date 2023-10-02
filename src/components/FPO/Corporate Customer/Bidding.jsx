import { useState } from "react";
import Invite_Bids from "./Tabs/Invite_Bids";
import Ongoing_Bids from "./Tabs/Ongoing_Bids";
import Completed_Transactions from "./Tabs/Completed_Transactions";

const Bidding = () => {
  const [active, setActive] = useState("tab1");
  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Invite_Bids />;
  } else if (active === "tab2") {
    tab__UI = <Ongoing_Bids />;
  } else if (active === "tab3") {
    tab__UI = <Completed_Transactions />;
  }

  return (
    <div className="container w-full mx-auto">
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Bidding Process
            </h2>
      <div className="flex gap-3 md:gap-5 justify-end">
        <button
          onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Invited Bids
        </button>
        <button
          onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Ongoing Bids
        </button>
        <button
          onClick={() => setActive("tab3")}
          style={{
            borderBottom: active === "tab3" && "2px solid green",
          }}
          className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
        >
          Completed Transactions
        </button>
      </div>
      {tab__UI}
    </div>
  );
};

export default Bidding;
