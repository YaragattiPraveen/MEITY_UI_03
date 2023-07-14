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
    </div>
  );
};

export default Input_Requirement;
