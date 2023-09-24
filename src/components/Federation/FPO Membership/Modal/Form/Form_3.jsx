import { useState } from "react";
import Image_modal from "../../../../Farmer/Modals/Image_modal";

const Form_3 = () => {
    const [openModel, setOpenModel] = useState(false);
    const [heading, setHeading] = useState('')
    return (
        <>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Website
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        https://www.igc.com
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Number of Share Holders
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        12
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Bank Name
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        ICICI
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Account Number
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        216731xxx
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        IFSC Number
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        ICICI125655
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Upload Bank Passbook Image
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <button
                        onClick={() => {
                            setOpenModel(true);
                            setHeading("Bank Passbook Image");
                        }}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                    >
                        View
                    </button>
                </div>
            </div>
            {openModel && (
                <Image_modal title={heading} closemodel={setOpenModel} />
            )}
        </>
    );
};

export default Form_3;
