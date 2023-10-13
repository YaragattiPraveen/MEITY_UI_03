import React, { useState } from 'react'
import Invited_Bids from './Invited_Bids/Invited_Bids';
import Requested_Quotes from './Requested_Bids/Requested_Quotes';
import Navbar from '../Farmer/Navbar';

const FederationTransactions = () => {
    const [active, setActive] = useState("tab1");
    let name = "Federation - 1"

    let tab__UI;
    if (active === "tab1") {
        tab__UI = <Invited_Bids name={name} />;
    } else if (active === "tab2") {
        tab__UI = <Requested_Quotes name={name} show={"No"} />;
    }
    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
                Transactions with Federation
            </h2>
            <div className="flex gap-3 md:gap-5 justify-end mb-5">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Requested Bids
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Requested Quotes
                </button>
            </div>
            {tab__UI}
        </div>
    );
}

export default FederationTransactions