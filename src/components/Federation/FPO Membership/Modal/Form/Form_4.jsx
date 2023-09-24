import { useState } from "react";
import Image_modal from "../../../../Farmer/Modals/Image_modal";

const Form_4 = () => {
    const [openModel, setOpenModel] = useState(false);
    const [heading, setHeading] = useState('')
    return (
        <>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Name of Director
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Ram Babu
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Director Mobile Number
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        9178662127
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Gender
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Male
                    </p>
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        License Key
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Ha254yd646era564ba564d
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Copy of Bylaws (MOA & AOA)
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <button
                        onClick={() => {
                            setOpenModel(true);
                            setHeading("Copy of Bylaws Image");
                        }}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                    >
                        View
                    </button>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Certificate of Incorporation
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <button
                        onClick={() => {
                            setOpenModel(true);
                            setHeading(" Certificate of Incorporation Image");
                        }}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                    >
                        View
                    </button>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        GST Certificate
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <button
                        onClick={() => {
                            setOpenModel(true);
                            setHeading(" GST Certificate Image");
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

    )
}

export default Form_4