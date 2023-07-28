import { useState } from "react"
import { Navbar } from "react-bootstrap"

const Request_Quotation = () => {
    const [active,setActive] = useState("tab1")
  return (
    <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Requested Quotes
            </h2>
            <button>Start quotation</button>
            <div className="flex gap-3 md:gap-5 justify-end ">
                <button
                    onClick={() => setActive("tab1")}
                    style={{
                        borderBottom: active === "tab1" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Quoted Request
                </button>
                <button
                    onClick={() => setActive("tab2")}
                    style={{
                        borderBottom: active === "tab2" && "2px solid green",
                    }}
                    className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-base font-bold cursor-pointer"
                >
                    Ongoing Transactions
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
        </div>
  )
}

export default Request_Quotation