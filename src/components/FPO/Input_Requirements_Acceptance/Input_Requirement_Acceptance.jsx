import { useState } from "react";
import Navbar from "../../Farmer/Navbar";
import { months } from "../../Utils/Const";
const Input_Requirement_Acceptance = () => {
  const [selectedType, setSelectedType] = useState("Seed");
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
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Place a Requirement
      </h2>

      <div className="relative bg-nav__bg__color shadow-sm w-auto border p-5 my-8 mx-auto max-w-xs md:max-w-xl lg:max-w-2xl">
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Input Type
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="select p-2 select-bordered w-full"
            >
              {RequirementDropDown.map((type, ind) => (
                <option key={ind} id={type.name}>{type.name}</option>
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
            <input type="text" placeholder="Enter the input Variant" className="select p-2 select-bordered w-full" />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Brand
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <input type="text" placeholder="Enter the Brand Name" className="select p-2 select-bordered w-full" />
          </div>
        </div>
        <div className="md:flex lg:flex-row mb:4 flex-col m-2">
          <div className="lg:w-1/2 sm:w-full mr-1">
            <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
              Quantity (KG or L)
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <div className="flex">
              <input type="number" placeholder="Enter the Quantity" className="select p-2 select-bordered w-full" />
              <select className="select p-2 select-bordered w-full">
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
              Select the Month
            </label>
          </div>
          <div className="lg:w-1/2 sm:w-full mr-1 border ">
            <div className="flex">
              <select className="select p-2 select-bordered w-full">
                {
                  months?.map((month, ind) => {
                    return <option key={ind}>{month}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-4 py-3 rounded-b">
          <button
            className="bg-bg__color text-white active:bg-emerald-600 font-semi-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>

      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        Previous Requirement Records
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

export default Input_Requirement_Acceptance;
