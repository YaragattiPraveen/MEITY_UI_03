import React from "react";

const Loan_form3 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Father Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="Farmer Father"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Mother Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="Farmer Mother"
            type="date"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Door Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            type="text"
            placeholder="D 1"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Street Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            placeholder="S 1"
            type="text"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Village
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="V 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Taluk
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="T 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            District
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="D 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
    </>
  );
};

export default Loan_form3;
