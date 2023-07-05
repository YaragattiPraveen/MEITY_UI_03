import React from "react";
import Repayment_Structure_Table from "../../Tables/Repayment_Structure_Table";
const Repayment_Structure = ({ closemodal }) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Repayment Structure
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
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Repayment Date
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    12345
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Loan Period in Months :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    1
                  </label>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Farmer Name :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    abcd
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    No of Repayment Per Year :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    1
                  </label>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Annual Interest Rate :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    14%
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Loan Amount :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    400
                  </label>
                </div>
              </div>
              <Repayment_Structure_Table />
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Repayment_Structure;
