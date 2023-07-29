import React from "react";

const Loan_form2 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Mobile Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="1234567890"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant DOB
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="10/05/2023"
            type="date"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Age
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            type="text"
            placeholder="30"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            ID Proof Type
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            placeholder="Aadhar"
            type="text"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Proof ID Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="1234567890"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Address Proof Type
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Aadhar"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
          Applicant Address Proof Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="1234567890"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
    </>
  );
};

export default Loan_form2;
