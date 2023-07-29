import React from "react";

const Loan_form4 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            State
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="S 1"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Pin Code
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="123456"
            type="date"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Occupation
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            type="text"
            placeholder="Farmer"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Education
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            placeholder="E 1"
            type="text"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Nature of Place
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="N 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Residence
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="R 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Caste
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="C 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Religion
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Rg 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
    </>
  );
};

export default Loan_form4;
