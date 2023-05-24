import React from "react";

const Form2 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">
            State
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">
            Pincode
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">
            Website
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">
            License Key
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color"
          />
        </div>
      </div>
    </>
  );
};

export default Form2;
