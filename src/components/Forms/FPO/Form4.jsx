import React from "react";

const Form4 = () => {
  return (
    <>
      <h2 className="m-2 text-xl font-Roboto font-semibold">Director Details</h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">Name</label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <div>
            <label
              className="block text-grey-darker font-Roboto text-black__color mb-2"
              htmlFor="Gender"
            >
              Gender
            </label>

            <div className="flex justify-between">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="text-grey-darker font-Roboto text-black__color mb-2 form-check-label">Male</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="text-grey-darker font-Roboto text-black__color mb-2 form-check-label">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="father_name"
          >
            Copy of Bylaws (MOA & AOA) *
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="father_name"
            type="file"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="Mother Name"
          >
            Certificate of Incorporation
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="Mother_Name"
            type="file"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="Door Number"
          >
            GST Certificate
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="Door_Number"
            type="file"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            License Key
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
    </>
  );
};

export default Form4;
