import Navbar from "../../Farmer/Navbar";
const Request_Quote = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Request Quotation
      </h2>
      <div className="relative shadow-sm w-auto border p-5 my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-2xl">
        <h1 className="m-2 text-hover__color font-Roboto font-medium text-lg">
          New Request
        </h1>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Brand Name
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <select className="select p-2 select-bordered w-full max-w-xs">
              <option>Akash</option>
              <option>Nuziveedu</option>
              <option>Coramandal</option>
              <option>Gramore</option>
            </select>
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Variety
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <select className="select p-2 select-bordered w-full max-w-xs">
              <option>Seeds</option>
              <option>Pesticides</option>
              <option>Fertilizer</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Crop Type
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <select className="select p-2 select-bordered w-full max-w-xs">
              <option>Pulses</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Quantity 1 (in KG's)
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <input type="text" className="w-full outline-none py-1 px-1" />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Quantity 2 (in KG's)
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <input type="text" className="w-full outline-none py-1 px-1" />
          </div>
        </div>
        {/*body*/}

        {/*footer*/}
        <div className="flex items-center justify-end px-4 py-3 rounded-b">
          <button
            className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Request Quote Now
          </button>
        </div>
      </div>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="flex flex-col p-3">
          <h3 className="text-hover__color text-xl font-semibold font-Roboto py-2">
            Previous Requests
          </h3>
          <div className="overflow-x-auto mx-2 md:mx-4 md:overflow-auto lg:overflow-auto">
            <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light table-auto">
                  <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Variety
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Crop Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Quantity 1
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Quoted Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Quantity 2
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Quoted Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Akash
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Pesticides
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Wheat
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        3500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        40/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        2500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        45/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          className="bg-bg__color text-white py-1 px-2 rounded-sm"
                          type="button"
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Akash
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Pesticides
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Wheat
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        3500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        40/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        2500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        45/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          className="bg-bg__color text-white py-1 px-2 rounded-sm"
                          type="button"
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Akash
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Pesticides
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Wheat
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        3500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        40/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        2500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        45/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          className="bg-bg__color text-white py-1 px-2 rounded-sm"
                          type="button"
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Akash
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Pesticides
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Wheat
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        3500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        40/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        2500 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        45/KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          className="bg-bg__color text-white py-1 px-2 rounded-sm"
                          type="button"
                        >
                          Order
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request_Quote;
