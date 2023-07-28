const Step1 = () => {
    return (
        <>
            <div className="relative px-6 py-3 flex-auto">
                <h2 className="text-bg__color font-Roboto text-xl font-semibold mb-4">Bid Details</h2>
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
                            placeholder="Some remark"
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step1