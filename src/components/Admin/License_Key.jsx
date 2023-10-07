import Navbar from "../Farmer/Navbar"
import { useState } from "react"
import FPO from "./Licenses/FPO"
import Samaunnati from "./Licenses/Samaunnati"
import Input_Supplier from "./Licenses/Input_Supplier"
import Outpur_Supplier from "./Licenses/Outpur_Supplier"
import Federation from "./Licenses/Federation"

const License_Key = () => {
    const [active, setActive] = useState('tab1')
    let display_UI
    if (active === "tab1") {
        display_UI = <FPO />
    } else if (active === "tab2") {
        display_UI = <Samaunnati />
    } else if (active === "tab3") {
        display_UI = <Input_Supplier />
    } else if (active === "tab4") {
        display_UI = <Outpur_Supplier />
    } else if (active === "tab5") {
        display_UI = <Federation />
    }

    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                License Key Generator
            </h2>
            <div className="flex gap-3 md:gap-5 justify-between md:justify-end ">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    FPO
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Samunnati
                </button>
                <button
                    onClick={() => setActive("tab3")}
                    style={{
                        borderBottom: active === "tab3" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Input Supplier
                </button>
                <button
                    onClick={() => setActive("tab4")}
                    style={{
                        borderBottom: active === "tab4" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Output Customer
                </button>
                <button
                    onClick={() => setActive("tab5")}
                    style={{
                        borderBottom: active === "tab5" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Federation
                </button>
            </div>
            {display_UI}
        </div>
    )
}

export default License_Key