import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useState} from "react"
import ProgressSteps from "../../../Utils/ProgressSteps"

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


// eslint-disable-next-line react/prop-types
const Show_Input_Supplier_Bids_Status = ({handleClose,show}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const formArray = [1, 2, 3, 4];
    let currentUI;
    if (currentPage === 0) {
        currentUI = <Step1/>;
    } else if (currentPage === 1) {
        currentUI = <Step2/>;
    } else if (currentPage === 2) {
        currentUI = <Step3 show={show} />;
    } else if (currentPage === 3) {
        currentUI = <Step4 show={show} />;
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

                        {/*body*/}

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
                                style={{ visibility: currentPage < 3 ? "visible" : "hidden", cursor: "pointer" }}
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

export default Show_Input_Supplier_Bids_Status