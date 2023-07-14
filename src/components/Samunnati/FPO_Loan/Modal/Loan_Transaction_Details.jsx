import { useState } from "react";
import Form_2 from "../Forms/Loan_Transaction/Form_2"
import Form_1 from "../Forms/Loan_Transaction/Form_1";

const Loan_Transaction_Details = ({ closemodal }) => {
  const [viewLoanDetails, setViewLoanDetails] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Loan/Transaction Details
              </h3>
              <button
                onClick={() => {
                  closemodal(false);
                }}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/*body*/}
            {viewLoanDetails ? <Form_2 closemodal={closemodal} /> : <Form_1 closemodal={setViewLoanDetails} />}
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Loan_Transaction_Details;
