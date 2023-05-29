import React, { useState } from "react";
import Image_modal from "../../../Farmer/Modals/Image_modal";

const Form_6 = () => {
  const [openModel, setOpenModel] = useState(false);
  const [heading, setHeading] = useState("");
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Religion
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            XXXXXXX
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Monthly HH Income
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            XXXXXXX
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Monthly HH Expenses
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            XXXXXXX
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Loan Purpose
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            XXXXXXX
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Loan Tenure (Months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            3 months
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Samunnati Payment Proof
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <button
            onClick={() => {
              setOpenModel(true);
              setHeading("Samunnati Payment Image");
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
            Interest Rate (%)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            12
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Amount (in Rs.)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            1000000
          </p>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Tenure (in months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
            12
          </p>
        </div>
      </div>
      {openModel && <Image_modal title={heading} closemodel={setOpenModel} />}
    </>
  );
};

export default Form_6;
