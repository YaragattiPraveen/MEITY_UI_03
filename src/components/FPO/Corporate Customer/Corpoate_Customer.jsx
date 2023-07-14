import { useState } from "react";
import Navbar from "../../Farmer/Navbar"
import Invite_Bids from "./Tables/Invite_Bids";
import Ongoing_Bids from "./Tables/Ongoing_Bids";
import Completed_Transactions from "./Tables/Completed_Transactions";

const Corpoate_Customer = () => {
    const [active, setActive] = useState("tab1");
    let tab__UI;
    if (active === "tab1") {
        tab__UI = <Invite_Bids />;
    } else if (active === "tab2") {
        tab__UI = <Ongoing_Bids />;
    } else if (active === "tab3") {
        tab__UI = <Completed_Transactions />;
    }

    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Corporate Customer
            </h2>
            <div className="flex gap-3 md:gap-5 justify-end ">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Invited Bids
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Ongoing Bids
                </button>
                <button
                    onClick={() => setActive("tab3")}
                    style={{
                        borderBottom: active === "tab3" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Completed Transactions
                </button>
            </div>
            {tab__UI}
        </div>
    )
}

export default Corpoate_Customer