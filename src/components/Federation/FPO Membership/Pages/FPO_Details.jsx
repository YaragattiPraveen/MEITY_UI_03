import { useState } from "react";
import Fpo_Details from "../../../Farmer/FPO_Details/Fpo_Details";
import FpoSaleHistory from "./FpoSaleHistory";

const FPO_Details = ({ setFPOinfo }) => {
    const [active, setActive] = useState("tab1");

    let tab__UI;
    if(active === "tab1"){
        tab__UI = <Fpo_Details show={true} />
    }else if(active === "tab2"){
        tab__UI = <FpoSaleHistory/>
    }
    return (
        <>
            <button
                onClick={() => setFPOinfo(true)}
                className="bg-bg__color text-center shadow-md z-0 focus:outline-none block text-white px-4 py-1 mb-5 rounded"
            >
                Back to Farmer Page
            </button>
            <div className="flex gap-2 md:gap-5 justify-center md:justify-end flex-wrap">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-2 md:px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    FPO Information
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-2 md:px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    FPO Sale History
                </button>
            </div>

            {tab__UI}
        </>
    )
}

export default FPO_Details