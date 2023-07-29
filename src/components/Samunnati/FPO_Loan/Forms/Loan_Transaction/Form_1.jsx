import React from "react";

const Form_1 = ({closemodal}) => {
  return (
    <>
      <div className="relative px-6 py-3 flex-auto">
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              FPO ID
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled
              placeholder="FPO 5"
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
              disabled
              placeholder="2021-10-10"
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
              disabled
              placeholder="100000"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Amount Paid
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled
              placeholder="100000"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Date of Last Payment
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled
              placeholder="2022-10-10"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
        <button onClick={() => closemodal(true)} className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          View Transaction Details
        </button>
      </div>
    </>
  );
};

export default Form_1;
