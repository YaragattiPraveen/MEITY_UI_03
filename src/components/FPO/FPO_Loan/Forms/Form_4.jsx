import React, { useState } from "react";

const Form_4 = () => {
  return (
    <>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        Financial Details
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Last 3 years audited financial statements
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Current year provisonal/Interim financials
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Month wise purchase and sales data for last 6 months
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Latest 3 months stock statement
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Business Plan
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Bank statement for last 1 year
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Sanction letter copies
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            GST returns for the past 6 months
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      
    </>
  );
};

export default Form_4;
