import { useState } from "react";
import Image_modal from "../../../../Farmer/Modals/Image_modal";

const Form_2 = () => {
    const [openModel, setOpenModel] = useState(false);
    const [heading, setHeading] = useState('')

    return (
        <>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Email
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        abc@gamil.com
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Date of Incorporation
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        29/08/2023
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Rgistration Number
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        2356156
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        PAN Card Number
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <p className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        PBPY153AFE
                    </p>
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                        Pan Card Image
                    </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <button
                        onClick={() => {
                            setOpenModel(true);
                            setHeading("Pan Card Image");
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

export default Form_2;
