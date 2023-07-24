const Step2 = () => {
  return (
    <>
      <div className="relative lg:px-6 py-3 flex-auto">
        <h3 className="text-xl font-semibold font-Roboto text-bg__color py-3">
          Upload Invoice
        </h3>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              FPO ID
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="12342"
              disabled
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              FPO Name
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="FPO"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              FPO Phone Number
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="Number"
              placeholder="98213XXXXX"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Bid Amount
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="3000"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Invoice Number
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="132456"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Invoice Date
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="text"
              placeholder="12/12/2023"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Upload Invoice
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="file"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <button
          className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear w-full transition-all duration-150"
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Step2