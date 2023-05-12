import React from 'react'
import { Link } from 'react-router-dom'
const FPO = () => {
    return (
        <div className="py-4 px-8">
            <h1 className='text-indigo-600 text-2xl border-grey-lighter font-semibold text-center pb-5'>FPO Signup</h1>
            <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="first_name"
                    >
                        Name of FPO
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="first_name"
                        type="text"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Username "
                    >
                        Username
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="last_name"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="password"
                        type="password"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Confirm Password"
                    >
                        Address
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Confirm Password"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">State   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Pincode   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Email   </label>
                    <input type="email" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Website   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="date"
                    >
                        Date of InCorporation
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="date"
                        type="date"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="age"
                    >
                        Registration Number
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="age"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">PAN Card Number
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Upload PAN Card
                    </label>
                    <input type="file" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">No of ShareHolders
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>


            <h2 className='m-2 text-xl py-4 font-semibold'>Bank Details</h2>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Bank Name
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Account Number
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">IFSC Code
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Upload Bank Passbook Image
                    </label>
                    <input type="file" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>

            <h2 className='m-2 text-xl py-4 font-semibold'>Director Details</h2>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Name
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Mobile Number
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <div>
                        <label
                            className="block text-grey-darker text-sm mb-2"
                            htmlFor="Gender"
                        >
                            Gender
                        </label>

                        <div className='flex justify-between'>
                            <div>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="father_name"
                    >
                        Copy of Bylaws (MOA & AOA) *
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="father_name"
                        type="file"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Mother Name"
                    >
                        Certificate of Incorporation
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Mother_Name"
                        type="file"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Door Number"
                    >
                        GST Certificate
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Door_Number"
                        type="file"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Lincese Key
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>

            <p className="text-center my-4">
                <a
                    href="#"
                    className="text-grey-dark text-sm no-underline hover:text-grey-darker"
                >
                    I already have an account? <Link to='/' className='text-indigo-500 text-base'>Sign In</Link>
                </a>
            </p>
            <div className="flex items-center justify-between mt-8">
                <button
                    className="bg-gradient-to-r to-green-400 from-blue-500 py-2 w-[100px]
                    hover:bg-gradient-to-l 
                    transition duration-150 ease-in text-white px-4"
                    type="submit"
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default FPO