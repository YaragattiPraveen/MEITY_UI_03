import React, { useState } from "react";
import Navbar from "../../Farmer/Navbar";
const Input_Requirement_Acceptance = () => {
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
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Requirement Acceptance
      </h2>

      <div className="relative shadow-sm w-auto border p-5 my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-2xl">
        {/*content*/}
        {/*header*/}
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
              className="select p-2 select-bordered w-full max-w-xs"
            >
              {RequirementDropDown.map((type) => (
                <option id={type.name}>{type.name}</option>
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
            <select className="select p-2 select-bordered w-full max-w-xs">
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
            <select className="select p-2 select-bordered w-full max-w-xs">
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
            <select className="select p-2 select-bordered w-full max-w-xs">
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
            <select className="select p-2 select-bordered w-full max-w-xs">
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
            <select className="select p-2 select-bordered w-full max-w-xs">
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
            <select className="select p-2 select-bordered w-full max-w-xs">
              <option>Select Payment Mode</option>
              <option>Cash/Bank Transfer</option>
              <option>Credit</option>
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
            Place Order
          </button>
        </div>
      </div>

      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="flex flex-col p-3">
          <h3 className="text-hover__color text-xl font-semibold font-Roboto py-2">
            Previous Orders
          </h3>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-4 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                    <tr>
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
                        Crop Name
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
                        Quantity (KG or L)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Month
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Payment Mode
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Seeds
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Wheat
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Variant 1
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        3 KG
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        January
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Cash
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

export default Input_Requirement_Acceptance;
