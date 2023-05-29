import React, { useState } from "react";
import Image_modal from "../../../../../Farmer/Modals/Image_modal";

const Form2 = () => {
  const [openModel, setOpenModel] = useState(false);
  const [heading,setHeading] = useState('')

  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Mobile Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            1234567890
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant DOB
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            10/05/2023
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Applicant Age
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            30
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Aadhar Card Image
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Aadhar Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            PAN Card Number
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            1234567890
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            PAN Card Image
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Pan Card Image");
            }}
            className="bg-bg__color text-center block text-white px-4 py-1 rounded"
          >
            View
          </button>
        </div>
      </div>
      {openModel && (
        <Image_modal title={heading} closemodel={setOpenModel} />
      )}
    </>
  );
};

export default Form2;
