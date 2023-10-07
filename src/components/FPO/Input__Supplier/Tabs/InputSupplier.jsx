import { useState } from "react";
import Request_Quote from "../../Request_Quote/Request_Quote";
import Invite_Bids from "../../Inivete_Bids/Invite_Bids"
import Navbar from "../../../Farmer/Navbar";


const InputSupplier = () => {
    const [active, setActive] = useState("tab1");
    return (
        <div className="container w-full mx-auto">
            <Navbar/>
            <div className="flex gap-2 justify-end py-4">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Invite Bids
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
                >
                    Request Quotes
                </button>
            </div>
            {active === "tab1" ? <Invite_Bids /> : <Request_Quote />}
        </div>
    );
}

export default InputSupplier