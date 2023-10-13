import { useState } from "react"
import Request_Quote from "./Tabs/Requested_Quote"
import Ongoing_Quotes from "./Tabs/Ongoing_Quotes"
import Completed_Quotes from "./Tabs/Completed_Quotes"

const Requested_Quotes = ({ name }) => {
    const [active, setActive] = useState("tab1")

    let display_UI
    if (active === "tab1") {
        display_UI = <Request_Quote name={name} />
    } else if (active === "tab2") {
        display_UI = <Ongoing_Quotes name={name} />
    } else if (active === "tab3") {
        display_UI = <Completed_Quotes name={name} />
    }

    return (
        <div className="container w-full mx-auto">
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Requested Quotes
            </h2>
            <div className="flex gap-3 md:gap-5 justify-end ">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Requested Quotes
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Ongoing Quotes
                </button>
                <button
                    onClick={() => setActive("tab3")}
                    style={{
                        borderBottom: active === "tab3" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Completed Quotes
                </button>
            </div>
            {
                display_UI
            }
        </div>
    )
}

export default Requested_Quotes