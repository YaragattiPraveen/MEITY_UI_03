import { useState } from "react";
import Navbar from "../Navbar";
const Input_Requirement = () => {
  const [selectedType, setSelectedType] = useState("Seed");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const RequirementDropDown = [
    {
      name: "Seed",
      Seed: ["Seed 1", "Seed 2", "Seed 3"],
    },
    {
      name: "Fertilizer",
      Fertilizer: ["Fertilizer 1", "Fertilizer 2", "Fertilizer 3"],
    },
    {
      name: "Pesticide",
      Pesticide: ["Pesticide 1", "Pesticide 2", "Pesticide 3"],
    },
  ];

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        Input Requirement
      </h2>
      {/* <div>
        <div className="relative bg-box__bg__color shadow-sm w-auto border p-2 md:p-5 mx-auto md:mx-w-xl md:max-w-2xl">
          <div className="md:flex lg:flex-row mb:4 flex-col m-3">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Input Type
              </label>
            </div>
            <div className="lg:w-1/2 md:w-full mr-1 border ">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="select p-2 select-bordered w-full max-w-full"
              >
                {RequirementDropDown.map((type) => (
                  <option key={type.name}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Crop Name
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select Crop</option>
                {RequirementDropDown.find((item) => item.name === selectedType)[
                  selectedType
                ].map((crop, ind) => (
                  <option key={ind}>{crop}</option>
                ))}
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
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select Crop</option>
                <option>Variant 1</option>
                <option>Variant 2</option>
                <option>Variant 3</option>
              </select>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Brand
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select Crop</option>
                <option>Akash - Pooja Gold 310</option>
                <option>Akash - Pooja Gold 311</option>
                <option>Akash - Pooja Gold 315</option>
              </select>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Quantity (KG or L)
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select in KG/L</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Month
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select Month</option>
                {months.map((month, ind) => (
                  <option key={ind}>{month}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex lg:flex-row mb:4 flex-col m-2">
            <div className="lg:w-1/2 sm:w-full mr-1">
              <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                Payment mode
              </label>
            </div>
            <div className="lg:w-1/2 sm:w-full mr-1 border ">
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select Payment Mode</option>
                <option>Cash/Bank Transfer</option>
                <option>Credit</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end px-4 py-3 rounded-b">
            <button
              className="text-white uppercase text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color"
              type="button"
            >
              Submit Requirement
            </button>
          </div>
        </div>
      </div> */}
      <div className="relative bg-box__bg__color shadow-sm w-auto border p-2 md:p-5 mx-auto md:mx-w-xl md:max-w-2xl">
        {/*content*/}
        {/*header*/}
        <div className="md:flex lg:flex-row mb:4 flex-col m-3">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Input Type
            </label>
          </div>
          <div className="lg:w-1/2 md:w-full mr-1 border ">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="select p-2 select-bordered w-full max-w-full"
            >
              {RequirementDropDown.map((type) => (
                <option key={type.name}>{type.name}</option>
              ))}
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
            <input type="text" placeholder="Enter the input variant" className="select p-2 select-bordered w-full max-w-full" />

          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Brand
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <input type="text" placeholder="Enter the Brand Name" className="select p-2 select-bordered w-full max-w-full" />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Quantity (KG or L)
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <div className="flex items-center justify-between">
              <input type="number" placeholder="Enter the quantity" className="select p-2 select-bordered w-full max-w-full" />
              <select className="select p-2 select-bordered w-full max-w-full">
                <option>Select in KG/L</option>
                <option>Kg</option>
                <option>L</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Month
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <select className="select p-2 select-bordered w-full max-w-full">
              <option>Select Month</option>
              {months.map((month, ind) => (
                <option key={ind}>{month}</option>
              ))}
            </select>
          </div>
        </div>
        {/*body*/}

        {/*footer*/}
        <div className="flex items-center justify-end px-4 py-3 rounded-b">
          <button
            className="text-white uppercase text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color"
            type="button"
          >
            Submit Requirement
          </button>
        </div>
      </div>
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        Previous Requirements
      </h2>
      <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 mb-8">
        <div className="overflow-x-auto mx-3 md:mx-3 md:overflow-auto lg:overflow-auto">
          <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light table-auto">
                <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Input Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Input Variant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Month
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Application Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Seed
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Variant 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-19
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      25 Kg
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      June
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/06/23
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Pesticide
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Pesticide 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-20
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      5 L
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      March
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/03/23
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Fertilizer
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Fertilizer 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-37
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      15 L
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      May
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/05/23
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input_Requirement;

