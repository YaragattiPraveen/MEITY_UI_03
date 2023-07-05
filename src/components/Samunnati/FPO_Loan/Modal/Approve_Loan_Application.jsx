import React from "react";

const Approve_Loan_Application = ({closemodal}) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-md">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Repayment
              </h3>
              <button
                onClick={() => {
                  closemodal("Change Loan Status");
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
                    FPO Name
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="FPO 5"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Contact No
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
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
                    Window ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="W545454"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Date of Application
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    disabled="true"
                    placeholder="2021-10-10"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Window Tenure (months)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
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
                    Requested Amount
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
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
                    Granted Amount
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Loan Window Interest Rate (%)
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                Approve Loan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Approve_Loan_Application;
