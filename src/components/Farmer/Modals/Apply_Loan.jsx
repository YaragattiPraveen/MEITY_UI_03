import React, { useState } from "react";
import Loan_form1 from "../../Forms/Loan_Forms/Loan_form1";
import Loan_form2 from "../../Forms/Loan_Forms/Loan_form2";
import Loan_form3 from '../../Forms/Loan_Forms/Loan_form3'
import Loan_form4 from '../../Forms/Loan_Forms/Loan_form4'
import Loan_form5 from "../../Forms/Loan_Forms/Loan_form5";

const Modal = ({ closemodel }) => {
  const [page, setPage] = useState(0);

    function DisplayForm() {
      if (page === 0) {
        return <Loan_form1 />;
      } else if (page === 1) {
        return <Loan_form2 />;   
      } else if (page === 2) {
        return <Loan_form3 />;
      } else if (page === 3) {
        return <Loan_form4 />;
      } else if (page === 4) {
        return <Loan_form5/>
      } 
    }

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Farmer Loan
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
                className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Back
              </button>
              {page === 4 ? (
                <button
                  className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              ) : (
                <button
                  disabled={page === 4}
                  onClick={(prevPage) => setPage(page + 1)}
                  className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
