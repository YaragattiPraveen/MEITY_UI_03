import React, { useState } from "react";

const Form_5 = () => {
  return (
    <>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        Other Details
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Product wise break up of revenues (2 fiscal)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Latest 3 months stock statements
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Debtors ageing analysis fiscal year end
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Top 5 suppliers/vintage (last 6 months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Top 5 buyers/vintage (last 6 months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Sanction limit & O/s for both WC & TL
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Term loan summary
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Project estimate & other relavant documents
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
    </>
  );
};

export default Form_5;
