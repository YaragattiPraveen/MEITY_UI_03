import { useState } from "react";
import Navbar from "../../Farmer/Navbar"
import Invite_Bids from "./Tabs/Invite_Bids";
import Ongoing_Bids from "./Tabs/Ongoing_Bids";
import Completed_Transactions from "./Tabs/Completed_Transactions";
import Bidding from "./Bidding";
import Fpo_Output_Market from "./Fpo_Output_Market";
import Open_Market_Trasactions from "./Open_Market_Trasactions";

const Corpoate_Customer = () => {
    const [active, setActive] = useState("tab1");
    let tab__UI;
    if (active === "tab1") {
        tab__UI = <Bidding />;
    } else if (active === "tab2") {
        tab__UI = <Fpo_Output_Market />;
    } else if (active === "tab3") {
        tab__UI = <Open_Market_Trasactions/>;
    }

    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Output Customer
            </h2>
            <div className="flex gap-3 md:gap-5 justify-end">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Bidding
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Fpo Output Market
                </button>
                <button
                    onClick={() => setActive("tab3")}
                    style={{
                        borderBottom: active === "tab3" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Open Market Trasactions
                </button>
            </div>
            {tab__UI}
        </div>
    )
}

export default Corpoate_Customer