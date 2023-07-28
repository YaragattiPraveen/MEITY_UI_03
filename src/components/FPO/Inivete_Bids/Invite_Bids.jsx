import { useState } from "react"
import Invited_Bids from "./Tabs/Invited_Bids"
import Ongoing_Bids from "./Tabs/Ongoing_Bids"
import Completed_Transactions_Bids from "./Tabs/Completed_Transactions_Bids"
import Navbar from "../../Farmer/Navbar"
import useModal from "../../hooks/useModal"
import StartBid from "./Modals/StartBid"

const Invite_Bids = () => {
    const [active, setActive] = useState('tab1')
    const { modal, updateModal, closeModal } = useModal()
    let tab_UI
    if (active === "tab1") {
        tab_UI = <Invited_Bids />
    } else if (active === "tab2") {
        tab_UI = <Ongoing_Bids />
    } else if (active === "tab3") {
        tab_UI = <Completed_Transactions_Bids/>
    }
    return (
        <div className="container w-full mx-auto">
            <Navbar />
            <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-4 ">
                Invite Bids
            </h2>
            <div>
                <button
                    onClick={() => updateModal("ShowStartBid")}
                    className="bg-bg__color mb-4 text-white__color border-none shadow-md rounded-lg z-0 px-4 py-2 font-Roboto text-sm md:text-base cursor-pointer"
                >
                    Start Bid
                </button>
            </div>
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
            {tab_UI}
            {
                modal.state === "ShowStartBid" && <StartBid handleClose={closeModal} />
            }
        </div>
    )
}

export default Invite_Bids