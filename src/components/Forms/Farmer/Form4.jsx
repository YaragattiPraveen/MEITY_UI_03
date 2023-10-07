const Form4 = () => {
  return (
    <>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            IFSC Code
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Branch Name
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            PAN Card Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Upload PAN Card
          </label>
          <input
            type="file"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Aadhaar Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Upload Aadhar Card
          </label>
          <input
            type="file"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            FPO Name
          </label>
          <select
            className="appearance-none border font-Roboto rounded w-full py-2 px-3 text-grey-darker"
            required=""
          >
            <option className='font-Roboto' value="murhu">Select</option>
            <option className='font-Roboto' value="murhu">
              Murhu Nari Shakti Farmer Producer Company Limited
            </option>
            <option className='font-Roboto' value="churchu">
              Churchu Nari Urja Farmer Producer Company Limited
            </option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Form4