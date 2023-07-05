import React, { useState } from "react";
import Image_modal from "../../../Farmer/Modals/Image_modal";
import Approve_Loan_Application from "../Modal/Approve_Loan_Application";
import Reject_Loan_Application from "../Modal/Reject_Loan_Application";

const Form_6 = () => {
  const [openModel, setOpenModel] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Change Loan Status");
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
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Latest 3 months stock statements
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Debtors ageing analysis fiscal year end
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Top 5 suppliers/vintage (last 6 months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Top 5 buyers/vintage (last 6 months)
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Sanction limit & O/s for both WC & TL
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Term loan summary
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
            Project estimate & other relavant documents
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1  ">
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
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          className="select p-2 select-bordered w-full max-w-xs border-2 rounded-lg"
        >
          <option>Change Loan Status</option>
          <option>Approve and Forward to Samunnati</option>
          <option>Reject</option>
        </select>
      </div>

      {selectedValue === "Change Loan Status" ? null : selectedValue ===
        "Approve and Forward to Samunnati" ? (
        <Approve_Loan_Application closemodal={setSelectedValue} />
      ) : (
        <Reject_Loan_Application closemodal={setSelectedValue} />
      )}
      {openModel && (
        <Image_modal title={"KYC Documents"} closemodel={setOpenModel} />
      )}
    </>
  );
};

export default Form_6;
