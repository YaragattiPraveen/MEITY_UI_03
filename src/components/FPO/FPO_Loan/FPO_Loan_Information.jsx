import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import Working_Capital_Loan_Modal from "./Modals/Working_Capital_Loan";
import Farmer_Loan from "./Tabs/Farmer_Loan";
import Working_Capital_Loan from "../FPO_Loan/Tabs/Working_Capital_Loan"
import Apply_For_Loan from '../FPO_Loan/Modals/Apply_For_Loan'
import Aggregate_Repayment from "./Modals/Aggregate_Repayment";
import useModal from "../../hooks/useModal";
const Loan_Information = () => {
  const [active, setActive] = useState("tab1");
  const {modal,closeModal,updateModal} = useModal()

  let tab__UI;
  if (active === "tab1") {
    tab__UI = <Working_Capital_Loan />;
  } else if (active === "tab2") {
    tab__UI = <Farmer_Loan />;
  }

  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
          Loan Information
        </h2>
        <div className="flex items-end justify-Start pb-4">
          {active === "tab1" ? (
            <button
              onClick={() => updateModal("ShowWorkingCapitalLoanWindow")}
              className="bg-bg__color md:text-base text-sm  text-center text-white px-4 py-1 rounded shadow-md z-0 focus:outline-none"
            >
              Apply for Working Capital Loan Window
            </button>
          ) : (
            <button
              onClick={() => updateModal("ShowFarmerLoanWindow")}
              className="bg-bg__color md:text-base text-sm   text-center text-white px-4 py-1 rounded"
            >
              Apply for Farmer Loan Window
            </button>
          )}
        </div>

        <div className="flex gap-3 mb-5 md:gap-5 justify-between md:justify-end">
          <button
            onClick={() => setActive("tab1")}
            style={{
              borderBottom: active === "tab1" && "2px solid green",
            }}
            className="text-hover__color text-sm shadow-md rounded-lg z-0 focus:outline-none px-2 py-1 md:px-4 md:py-2 font-Roboto md:text-base font-bold cursor-pointer"
          >
            Working Capital Loan
          </button>
          <button
            onClick={() => setActive("tab2")}
            style={{
              borderBottom: active === "tab2" && "2px solid green",
            }}
            className="text-hover__color text-sm shadow-md rounded-lg z-0 focus:outline-none px-2 py-1 md:px-4 md:py-2 font-Roboto md:text-base font-bold cursor-pointer"
          >
            Farmer Loan
          </button>
        </div>

        <div className="flex items-end justify-Start pb-4">
          <button
            onClick={() => updateModal("ShowLoanModal")}
            className="bg-bg__color shadow-md text-sm md:text-base z-0 focus:outline-none  text-center text-white px-4 py-1 rounded"
          >
            Apply for Loan
          </button>
        </div>
        {active === "tab2" ? (
          <div className="flex items-end justify-end pb-4">
            <button
              onClick={() => updateModal("ShowAggregate_Repayment")}
              className="bg-bg__color shadow-md z-0 focus:outline-none  text-center text-white px-4 py-1 rounded"
            >
              Aggregate Repayment
            </button>
          </div>
        ) : null}
        {tab__UI}
        {tab__UI}
        {modal.state === "ShowWorkingCapitalLoanWindow" && (
          <Working_Capital_Loan_Modal title={"Working Capital Loan Window Application"} closemodel={closeModal} />
        )}
        {
          modal.state === "ShowFarmerLoanWindow" && <Working_Capital_Loan_Modal title={"Farmer Loan Window Application"} closemodel={closeModal}/>
        }
        {modal.state === "ShowLoanModal" && <Apply_For_Loan closemodel={closeModal} />}
        {modal.state === "ShowAggregate_Repayment" && <Aggregate_Repayment closemodel={closeModal} />}
      </div>
    </>
  );
};

export default Loan_Information;
