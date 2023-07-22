import Image_modal from "../../../Farmer/Modals/Image_modal"
import useModal from "../../../hooks/useModal"
const Step3 = () => {
    const { modal, updateModal, closeModal } = useModal()
    return (
        <>
            <div className="relative px-6 py-3 flex-auto">
                <h2 className="text-bg__color font-Roboto text-2xl font-bold mb-4">Verify Test Certificate</h2>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            FPO ID
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="text"
                            placeholder="64817a37c31ad03a451a9f4c"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            FPO Name
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="text"
                            placeholder="fpoa"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            FPO Phone Number
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="number"
                            placeholder="8485257415"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            Bid Amount
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <input
                            type="text"
                            placeholder="100"
                            disabled
                            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        />
                    </div>
                </div>
                <div className="md:flex lg:flex-row mb:4 flex-col">
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <label className="block text-grey-darker font-Roboto text-silver__color mb-2 mt-3">
                            Report
                        </label>
                    </div>
                    <div className="lg:w-1/2 sm:w-full mr-1">
                        <button
                            onClick={() => updateModal("ViewTestReport")}
                            className="bg-bg__color w-full text-center block text-white px-4 py-1 rounded">
                            View
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-4 sm:w-full mr-1">
                    <button
                        className="bg-bg__color text-center block text-white px-4 py-2 rounded">
                        Reject Test Reports
                    </button>
                </div>
            </div>
            {
                modal.state === "ViewTestReport" && <Image_modal closemodel={closeModal} />
            }
        </>
    )
}

export default Step3