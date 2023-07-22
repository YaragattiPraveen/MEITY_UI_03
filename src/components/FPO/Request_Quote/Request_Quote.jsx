import Navbar from "../../Farmer/Navbar";
import useModal from "../../hooks/useModal";
import Place_Order from "../Place_Order/Place_Order";
import {months} from "../../Utils/Const"
const Request_Quote = () => {
  const { modal, closeModal, updateModal } = useModal()
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
          Previous Quotation Requests
        </h2>
        <div className="relative shadow-sm w-auto border p-5 my-4 mx-auto max-w-xs md:max-w-xl lg:max-w-2xl">
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
              <select className="select p-2 select-bordered w-full max-w-xl">
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
                Input Type
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-xl">
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
                Input Variant
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <input type="text" placeholder="Enter the Input Variant" className="select p-2 select-bordered w-full max-w-xs" />
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Quantity
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <div className="flex justify-between items-center">
                <input type="text" placeholder="Enter the quantity" className="w-full outline-none py-1 px-1" />
                <select className="select p-2 select-bordered w-full max-w-xl">
                  <option>Select in Kg/L</option>
                  <option>Kg</option>
                  <option>L</option>
                </select>
              </div>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Brand Name
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-xl">
                <option>Select the Month</option>
                {
                  months?.map((month,ind)=> {
                    return <option key={ind}>{month}</option>
                  })
                }
              </select>
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
                          Quotation Id
                        </th>
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
                          Input Type
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left"
                        >
                          Input Variant
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left"
                        >
                          Quoted Date
                        </th>
                        <th scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left">
                          Quoted Price / Kg
                        </th>
                        <th scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left"  
                        >
                          Month
                        </th>
                        <th scope="col"
                          className="px-4 py-4 text-medium font-Roboto text-left"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-300">
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          xhdoLftes5
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Akash
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Wheat
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Pesticides
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          35 KG
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          17/07/2023
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          --
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          August
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          <button
                            disabled
                            className="bg-yellow-500 text-white uppercase text-xs px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                          >Waiting for Quotation</button>
                        </td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          xhdoLftes6
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Akash - 798
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Seed
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Seed 1
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          35 KG
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          17/07/2023
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          10
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          June
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium
                      font-Roboto text-silver__color">
                          <button
                            onClick={() => updateModal("Place_Order")}
                            className="bg-bg__color text-white uppercase text-xs px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                          >Place a Order</button>
                        </td>
                      </tr>
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          xhdoLftes7
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Akash - 798
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Seed
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          Seed 1
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          35 KG
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          17/07/2023
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          10
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                          May
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium
                      font-Roboto text-silver__color">
                          <button
                            disabled
                            className="bg-silver__color text-white uppercase text-xs px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                          >Completed</button>
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
      {
        modal.state === "Place_Order" && <Place_Order closeModal={closeModal}/>
      }
    </>

  );
};

export default Request_Quote;
