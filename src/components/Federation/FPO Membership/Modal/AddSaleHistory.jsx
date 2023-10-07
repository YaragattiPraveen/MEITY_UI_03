import React from 'react'

const AddSaleHistory = ({ closeModal }) => {
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold font-Roboto py-3">
                                Add Sale History
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                X
                            </button>
                        </div>
                        {/*body*/}
                        <div className='px-4  pb-6'>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Sale ID
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder='Sd156235'
                                        disabled
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Date of Sale
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
                                        Item Name
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="text"
                                        placeholder="Seed - 1"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Unit Price
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="number"
                                        placeholder="250"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
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
                                        type="number"
                                        placeholder="79"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>
                            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                                        Total Amount
                                    </label>
                                </div>
                                <div className="lg:w-1/2 sm:w-full mr-1">
                                    <input
                                        type="number"
                                        placeholder="1205"
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
                            <button className="text-white uppercase text-sm lg:text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-4 py-1.5 px-4 bg-hover__color">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddSaleHistory