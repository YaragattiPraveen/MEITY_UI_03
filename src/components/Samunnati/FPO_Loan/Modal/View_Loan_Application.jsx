import React, { useState } from "react";
import Image_modal from "../../../Farmer/Modals/Image_modal";
import Approve_Loan_Application from "../Modal/Approve_Loan_Application";
import Reject_Loan_Application from "../Modal/Reject_Loan_Application";

const View_Loan_Application = ({closemodal}) => {
  const [openModel, setOpenModel] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Change Loan Status");

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-md">
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
                    Loan Window ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="W123456"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Loan ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
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
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
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
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="1234567890"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    IFSC Number
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="1234567890"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Bank Name
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="B 1"
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
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="100000"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Interest Rate (%)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="12"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Tenure of Loan in Months
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="12"
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
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <button
                    onClick={() => {
                      setOpenModel(true);
                      setHeading("Aadhar Card Image");
                    }}
                    className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                  >
                    View
                  </button>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Purpose
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1  ">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="Purpose 1"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  className="select p-2 select-bordered w-full max-w-xs border-2 rounded-lg"
                >
                  <option>Change Loan Status</option>
                  <option>Approve and Forward to Samunnati</option>
                  <option>Reject</option>
                </select>
              </div>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {selectedValue === "Change Loan Status" ? null : selectedValue ===
        "Approve and Forward to Samunnati" ? (
        <Approve_Loan_Application closemodal={setSelectedValue} />
      ) : (
        <Reject_Loan_Application closemodal={setSelectedValue} />
      )}
      {openModel && (
        <Image_modal title={"KYC Documents"} closemodel={setOpenModel} />
      )}
    </>
  );
};

export default View_Loan_Application;
