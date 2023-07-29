import React from "react";

const Loan_form1 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            FPO Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="FPO 1"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Bank Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            placeholder="B 1"
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Account Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            disabled
            type="text"
            placeholder="1234567890"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Bank IFSC
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            placeholder="1234567890"
            type="text"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Branch Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Br 1"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Name
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Farmer"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Gender
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Male"
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
    </>
  );
};

export default Loan_form1;
