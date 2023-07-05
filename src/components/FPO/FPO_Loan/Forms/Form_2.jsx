import React from "react";

const Form_2 = () => {
 
  return (
    <>
      <h2 className="m-2 text-hover__color font-semibold text-lg">
        KYC of Authorised Signatories
      </h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            List of Directors
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1 border-2 rounded-md">
          <input type="file" className="border-none p-1" />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            ID Proof
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <div className="flex justify-between gap-2">
            <select className="select p-2 select-bordered  border-2 rounded-md w-full max-w-xs">
              <option selected>Select</option>
              <option>PAN Card</option>
              <option>Voter ID</option>
            </select>
            <input type="file" className="p-1  border-2 rounded-md" />
          </div>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Address Proof
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <div className="flex justify-between gap-2">
            <select className="select p-2 select-bordered  border-2 rounded-md w-full max-w-xs">
              <option selected>Select</option>
              <option>Aadhar Card</option>
              <option>Voter ID</option>
              <option>Driving License</option>
              <option>Passport</option>
            </select>
            <input type="file" className="p-1  border-2 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_2;
