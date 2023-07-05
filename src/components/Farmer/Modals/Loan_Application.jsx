import React, { useState } from "react";
import Loan_Application_Form1 from "../../Forms/Loan_Application_Forms/Loan_Application_Form1";
import Loan_Application_Form2 from "../../Forms/Loan_Application_Forms/Loan_Application_Form2";
import Loan_Application_Form3 from "../../Forms/Loan_Application_Forms/Loan_Application_Form3";
import Loan_Application_Form4 from "../../Forms/Loan_Application_Forms/Loan_Application_Form4";
import Loan_Application_Form5 from "../../Forms/Loan_Application_Forms/Loan_Application_Form5";

const Loan_Application = ({ closemodel }) => {
  const [page, setPage] = useState(0);

  function DisplayForm() {
    if (page === 0) {
      return <Loan_Application_Form1 />;
    } else if (page === 1) {
      return <Loan_Application_Form2 />;
    } else if (page === 2) {
      return <Loan_Application_Form3 />;
    } else if (page === 3) {
      return <Loan_Application_Form4 />;
    } else if (page === 4) {
      return <Loan_Application_Form5 />;
    }
  }
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto px-2 my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Loan Application
              </h3>
              <button
                onClick={() => {
                  closemodel(false);
                }}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 py-3 flex-auto">{DisplayForm()}</div>
            {/*footer*/}
            <div className="flex items-center justify-between px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                style={{
                  visibility: page === 0 ? "hidden" : "visible",
                }}
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
                className="text-white uppercase text-sm lg:text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-4 py-1.5 px-4 bg-hover__color"
                type="button"
              >
                Back
              </button>
              <button
                style={{
                  visibility: page === 4 ? "hidden" : "visible",
                }}
                onClick={(prevPage) => setPage(page + 1)}
                className="text-white uppercase text-sm lg:text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-4 py-1.5 px-4 bg-hover__color"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Loan_Application;
