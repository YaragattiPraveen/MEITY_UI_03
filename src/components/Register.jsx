import { useState } from 'react'
import bg from '../assets/bg1.jpg'

import InputSupplier from './Forms/InputSupplier/InputSupplier'
import FPO from './Forms/FPO/FPO'
import Samunnati from './Forms/Samunnati/Samunnati'
import OutputSupplier from './Forms/OutputSupplier/OutputSupplier'
import Farmer from './Forms/Farmer/Farmer'

const Register = () => {
    const [selectedValue, setSelectedValue] = useState("Farmer");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    let formUI = <Farmer />
    switch (selectedValue) {
        case "Farmer":
            formUI = <Farmer />
            break;
        case "FPO":
            formUI = <FPO />
            break;
        case "Samunnati":
            formUI = <Samunnati />
            break;
        case "InputSupplier":
            formUI = <InputSupplier />
            break;
        case "OutputSupplier":
            formUI = <OutputSupplier />
            break;
        default:
            break
    }
    return (
        <div className="h-full  w-full lg:h-screen xl:h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="font-sans antialiased bg-grey-lightest">
                <div className="w-full py-8">
                    <div className="container mx-auto">
                        <div className="w-5/6 lg:w-1/2 mx-auto py-2 bg-white rounded shadow">
                            <div className="relative w-full mx-auto lg:max-w-sm">
                                <div className="w-60 px-3 mb-3 mx-auto text-center">
                                    <label htmlFor="dropdown" className="text-silver__color font-Roboto text-[17px] font-semibold text-center ">Choose your form:</label>
                                    <select
                                        id="dropdown"
                                        className=" w-full mt-1 p-3 border-silver__color
                                          border-2
                                          outline-none
                                          rounded
                                          text-center text-silver__color
                                          font-Roboto"
                                        value={selectedValue}
                                        onChange={handleChange}
                                    >
                                        <option className=' text-silver__color font-Roboto' value="Farmer ">Farmer</option>
                                        <option className=' text-silver__color font-Roboto' value="FPO">FPO</option>
                                        <option className=' text-silver__color font-Roboto' value="Samunnati">Samunnati</option>
                                        <option className=' text-silver__color font-Roboto' value="InputSupplier">Input Supplier</option>
                                        <option className=' text-silver__color font-Roboto' value="OutputSupplier">Output Supplier</option>
                                    </select>
                                </div>
                            </div>
                            {formUI}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register