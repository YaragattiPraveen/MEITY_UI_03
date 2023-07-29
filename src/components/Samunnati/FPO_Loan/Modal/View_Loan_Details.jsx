import { useState } from "react";
import Image_modal from '../../../Farmer/Modals/Image_modal'
import Repayment_Structure from "../Modal/Repayment_Structure";

const View_Loan_Details = ({ closemodal }) => {
  const [openImageModal, setImageModal] = useState(false);
  const [repaymentModal, setRepaymentModal] = useState(false);
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
            <div className="relative px-6 py-3 flex-auto">
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Loan ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="L 1"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Name of Payee
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="P 1"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Account Number
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="1234567890"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    IFSC Code
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="1234567890"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Amount
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="date"
                    disabled
                    placeholder="1000000"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Tenure of Loan (in months)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="12"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Purpose
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled
                    placeholder="Purpose 1"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Invoice
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <button
                    onClick={() => setImageModal(true)}
                    className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    View
                  </button>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Payment Proof
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <button
                    onClick={() => setImageModal(true)}
                    className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button
                onClick={() => setRepaymentModal(true)}
                className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                View Repayment Details
              </button>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {openImageModal && (
        <Image_modal title={"Proof of Payment"} closemodel={setImageModal} />
      )}
      {repaymentModal && <Repayment_Structure closemodal={setRepaymentModal} />}
    </>
  );
};

export default View_Loan_Details;
