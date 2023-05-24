import React from 'react'

const Form3 = () => {
  return (
    <>
      <h2 className="m-2 text-xl py-4 font-semibold font-Roboto">Bank Details</h2>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">Bank Name</label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
          Account Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
      <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">IFSC Number</label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full ml-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
            htmlFor="father_name"
          >
            Upload Bank Passbook Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="father_name"
            type="file"
          />
        </div>
      </div>
    </>
  )
}

export default Form3