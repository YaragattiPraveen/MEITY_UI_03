import { useState } from "react";
import useModal from "../../hooks/useModal";
import Requested_Quotes from "./Tabs/Requested_Quotes";
import Ongoing_Transactions from "./Tabs/Ongoing_Transactions";
import Completed_Transcations from "./Tabs/Completed_Transcations";
import Place_Quote from "./Modals/Place_Quote";
import Navbar from "../../Farmer/Navbar";
// import Place_Order from "../Place_Order/Place_Order";
// import {months} from "../../Utils/Const"
const Request_Quote = ({show}) => {
  const { modal, closeModal, updateModal } = useModal()
  const [active, setActive] = useState("tab1")

  let tab_UI
  if (active === "tab1") {
    tab_UI = <Requested_Quotes />
  } else if (active === "tab2") {
    tab_UI = <Ongoing_Transactions />
  } else if (active === "tab3") {
    tab_UI = <Completed_Transcations />
  }
  return (
    <>
      {
        show && <Navbar />
      }
      <div className="container w-full mx-auto">
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
          Quotation Requests
        </h2>
        <button
          onClick={() => updateModal("ShowPlaceQuote")}
          className="bg-bg__color mb-4 text-white__color border-none shadow-md rounded-lg z-0 px-4 py-2 font-Roboto text-sm md:text-base cursor-pointer"
        >
          Place a Quote
        </button>
        <div className="flex gap-3 md:gap-5 justify-end ">
          <button
            onClick={() => setActive("tab1")}
            style={{
              borderBottom: active === "tab1" && "2px solid green",
            }}
            className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
          >
            Requested Quotes
          </button>
          <button
            onClick={() => setActive("tab2")}
            style={{
              borderBottom: active === "tab2" && "2px solid green",
            }}
            className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
          >
            Ongoing Transactions
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
        {tab_UI}
      </div>
      {
        modal.state === "ShowPlaceQuote" && <Place_Quote handleClose={closeModal} />
      }
    </>

  );
};

export default Request_Quote;
