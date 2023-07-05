import React, { useState } from "react";
import Image_modal from "../../../../Farmer/Modals/Image_modal";

const Form_2 = ({ closemodal }) => {
  const [openImageModal, setImageModal] = useState(false);
  return (
    <>
      <div className="relative px-6 py-3 flex-auto">
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Receiver Name
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled="true"
              placeholder="R 1"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
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
              type="text"
              disabled="true"
              placeholder="B 1"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
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
              type="text"
              disabled="true"
              placeholder="1234567890"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              IFSC Code
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled="true"
              placeholder="1234567890"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Payment Date
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="date"
              disabled="true"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Payment Reference Number
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              disabled="true"
              className="appearance-none border rounded w-full py-1 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Proof of Payment
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <button onClick={() => setImageModal(true)} className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-1.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              View
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
        <button
          onClick={() => closemodal(false)}
          className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Close
        </button>
      </div>
      {openImageModal && <Image_modal title={"Proof of Payment"} closemodel={setImageModal}/>}
    </>
  );
};

export default Form_2;
