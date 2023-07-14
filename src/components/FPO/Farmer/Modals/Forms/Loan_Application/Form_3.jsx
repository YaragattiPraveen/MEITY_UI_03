import { useState } from "react";
import Image_modal from "../../../../../Farmer/Modals/Image_modal";
const Form_3 = () => {
  const [openModel, setOpenModel] = useState(false);
  const [heading,setHeading] = useState("")
  
  return (
    <div className="relative px-6 py-3 flex-auto">
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
            Reason for loan
          </label>
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <input
            type="text"
            placeholder="Reason"
            disabled="true"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 mt-4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color">
            Aadhar Picture
          </label>
          <button onClick={() => {
            setOpenModel(true)
            setHeading("Aadhar Picture")
            }}
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View
          </button>
        </div>
        <div className="lg:w-1/2 mx-2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color">
            PAN Card Picture
          </label>
          <button onClick={() => {
            setOpenModel(true)
            setHeading("PAN Card Picture")
            }}
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 mt-4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color">
            Bank Statements
          </label>
          <button onClick={() => {
            setOpenModel(true)
            setHeading("Bank Statements Image")
            }}
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View
          </button>
        </div>
        <div className="lg:w-1/2 mx-2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-silver__color">
            Address Proof
          </label>
          <button onClick={() => {
            setOpenModel(true)
            setHeading("Address Proof")
            }}
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            View
          </button>
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 mt-8 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <button
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Approve
          </button>
        </div>
        <div className="lg:w-1/2 mx-2 sm:w-full mr-1">
          <button
            className="bg-bg__color w-full text-white active:bg-emerald-600 px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Reject
          </button>
        </div>
      </div>
      {openModel && <Image_modal title={heading} closemodel={setOpenModel} />}
    </div>
  );
};

export default Form_3;
