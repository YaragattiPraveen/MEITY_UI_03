import React, { useState } from "react";

const Form_6 = () => {
  return (
    <>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        Apply for farmer Loan Window
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Window ID
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled="true"
            placeholder="W412586"
            type="text"
            className="border-2 p-1 w-full rounded-md"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Requested Loan Amount
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input type="text" className="border-2 p-1 w-full rounded-md" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Requested Loan Tenure (Months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input type="text" className="border-2 p-1 w-full rounded-md" />
        </div>
      </div>
    </>
  );
};

export default Form_6;
