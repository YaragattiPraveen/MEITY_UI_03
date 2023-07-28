// eslint-disable-next-line react/prop-types
const Custom_Confirmation_Box = ({ handleClose }) => {
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold font-Roboto py-3">
                                Are you sure?
                            </h3>

                            <button
                                onClick={handleClose}
                                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                X
                            </button>
                        </div>
                        <div className="relative px-6 py-3 flex-auto">
                            <h5 className="text-lg text-bg__color font-semibold font-Roboto py-3">Would Like to Submit the Data</h5>
                        </div>
                        <div className="flex items-center text-bg__color justify-end px-5 py-1 border-t border-solid border-slate-200 rounded-t">
                            <button onClick={handleClose} className="bg-bg__color text-white active:bg-emerald-600 font-semibold uppercase text-sm px-3 py-2 mt-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Cancel</button>
                            <button onClick={handleClose} className="bg-bg__color text-white active:bg-emerald-600 font-semibold uppercase text-sm px-3 py-2 mt-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Custom_Confirmation_Box