const StartBid = ({ handleClose }) => {
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold font-Roboto py-3">
                                Start Bid
                            </h3>

                            <button
                                onClick={handleClose}
                                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                X
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-6 py-3 flex-auto">
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Bid ID
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="12346"
                                        disabled
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Input Type
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <select className="appearance-none border rounded w-full py-2 px-3 text-grey-darker">
                                        <option>Select the Input Type</option>
                                        <option>Seed</option>
                                        <option>Pesticide</option>
                                        <option>Fertilizer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Input Variant
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input type="text" placeholder="Enter the input Variant" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Quantity
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Enter the Quantity"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Date of Supply
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="date"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        End Date for Bidding
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="date"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Required Test Reports
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <select className="appearance-none border rounded w-full py-2 px-3 text-grey-darker">
                                        <option>Select test Report</option>
                                        <option>Chowri</option>
                                        <option>Panna</option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Remarks
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Some remark"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end px-6 py-3 border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

export default StartBid