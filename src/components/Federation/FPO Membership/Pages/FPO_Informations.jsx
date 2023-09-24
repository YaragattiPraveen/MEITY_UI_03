import React, { useState } from 'react'
import FPO_Accepted_Membership from '../Tables/FPO_Accepted_Membership';
import FPO_Pending_Aapplications from '../Tables/FPO_Pending_Aapplications';
import FPO_Rejected_Membership from "../Tables/FPO_Rejected_Membership"

const FPO_Informations = ({setFPOinfo}) => {
    const [active, setActive] = useState("tab1");

    let tab__UI;

    if (active === "tab1") {
        tab__UI = <FPO_Accepted_Membership setFPOinfo={setFPOinfo} />;
    } else if (active === "tab2") {
        tab__UI = <FPO_Rejected_Membership setFPOinfo={setFPOinfo} />;
    } else if (active === "tab3") {
        tab__UI = <FPO_Pending_Aapplications />;
    }
    return (
        <>
            <div className="container flex justify-center md:justify-start items-center mb-3">
                <div className="relative">
                    <div className="absolute top-4 left-3">
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="h-14 w-70 md:w-96 pl-10 pr-20 shadow-md rounded-lg z-0 focus:outline-none"
                        placeholder="Search here..."
                    />
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-lg bg-bg__color hover:bg-hover__color">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 md:gap-5 justify-center md:justify-end flex-wrap">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-2 md:px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Accepted Memberships
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-2 md:px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Rejected Memberships
                </button>
                <button
                    onClick={() => setActive("tab3")}
                    style={{
                        borderBottom: active === "tab3" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-2 md:px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Pending Applications
                </button>
            </div>
            <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
                <div className="py-2">{tab__UI}</div>
            </div>
        </>
    )
}

export default FPO_Informations