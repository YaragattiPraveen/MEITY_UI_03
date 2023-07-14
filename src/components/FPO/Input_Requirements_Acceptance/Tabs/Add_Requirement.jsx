import { useState } from "react";

const Add_Requirement = () => {
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
                    <select className="select p-2 select-bordered w-full">
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
                        Brand
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 border ">
                    <select className="select p-2 select-bordered w-full">
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
                    <div className="flex">
                        <select className="select p-2 select-bordered w-full">
                            <option>Select in Quantity</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>150</option>
                        </select>
                        <select className="select p-2 select-bordered w-full">
                            <option>Select in KG/L</option>
                            <option>Kg</option>
                            <option>L</option>
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
    )
}

export default Add_Requirement