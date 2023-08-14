import React, { useState } from 'react'
import { months } from '../../../Utils/Const';

const PlaceRequirement = ({ closeModal }) => {
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
        <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold font-Roboto py-3">
                                Place a Requirement
                            </h3>

                            <button
                                onClick={closeModal}
                                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                X
                            </button>
                        </div>
                        <div className="relative px-6 py-3 flex-auto">
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
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default PlaceRequirement