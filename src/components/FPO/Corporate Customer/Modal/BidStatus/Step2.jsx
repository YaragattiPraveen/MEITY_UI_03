const Step2 = () => {
  return (
    <>
      <div className="relative lg:px-6 py-3 flex-auto">
        <h3 className="text-xl font-semibold font-Roboto text-bg__color py-3">
          Upload Test Certificate
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
              placeholder="Chattisgarh"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Required Test Reports
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1">
            <input
              type="file"
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Step2