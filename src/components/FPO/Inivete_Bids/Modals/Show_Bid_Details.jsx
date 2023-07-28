/* eslint-disable react/prop-types */

import { useState } from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Step1 from "./Step1"
import Step2 from "./Step2"
import ProgressSteps from "../../../Utils/ProgressSteps";
const Show_Bid_Details = ({ handleClose }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const formArray = [1, 2];
    let currentUI
    if (currentPage === 0) {
        currentUI = <Step1 />
    } else if (currentPage === 1) {
        currentUI = <Step2 />
    }
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold font-Roboto py-3">
                                Bid Status
                            </h3>

                            <button
                                onClick={handleClose}
                                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                X
                            </button>
                        </div>
                        {/* Body */}
                        {/* <div className="relative px-6 py-3 flex-auto">
                            <h2 className="text-bg__color font-Roboto text-xl font-semibold">Bid Details</h2>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Bid ID
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="tc_ydsK7GE"
                                        disabled
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Input Type
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Seed"
                                        disabled
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Input Variant
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Variant 1"
                                        disabled
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Quantity
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="250"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Date of Supply
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="24/07/2023"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        End Date for Bidding
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="28/07/2023"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                                        Remarks
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Some detailed remark"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                        </div> */}

                        <ProgressSteps currentPage={currentPage} formArray={formArray} />

                        <div className="relative py-3 flex-auto flex items-center justify-between">
                            <div
                                style={{ visibility: currentPage === 0 ? "hidden" : "visible", cursor: "pointer" }}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                <NavigateBeforeIcon />
                            </div>

                            {currentUI}

                            <div
                                style={{ visibility: currentPage < 1 ? "visible" : "hidden", cursor: "pointer" }}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                <NavigateNextIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Show_Bid_Details