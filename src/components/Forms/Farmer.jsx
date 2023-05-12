import React from 'react'
import { Link } from 'react-router-dom'
const Farmer = () => {
    return (
        <div className="py-4 px-8">
            <h1 className='text-indigo-600 text-2xl border-grey-lighter font-semibold text-center pb-5'>Farmer Signup</h1>
            <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="first_name"
                    >
                        First Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="first_name"
                        type="text"
                        placeholder="Your first name"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="last_name"
                    >
                        Last Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="last_name"
                        type="text"
                        placeholder="Your last name"
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
                        placeholder="Password"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Confirm Password"
                    >
                        Confirm Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="date"
                    >
                        Date of Birth
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
                        Age
                    </label>
                    <input
                        className="appearance-none border rounded w-full bg-slate-100 py-2 px-3 text-grey-darker"
                        id="age"
                        type="age"
                        disabled
                    />
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
                        Father Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="father_name"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Mother Name"
                    >
                        Mother Name
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Mother_Name"
                        type="text"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="Door Number"
                    >
                        Door Number
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="Door_Number"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Street Name </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Village  </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Taluk  </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">District  </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
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
                    <label className="block text-grey-darker text-sm mb-2">Occupation    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Education    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Nature of Place
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Residence
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Caste
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Religion
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
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
                    <label className="block text-grey-darker text-sm mb-2">Branch Name
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
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
                    <label className="block text-grey-darker text-sm mb-2">Aadhaar Number
                    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Upload Aadhar Card
                    </label>
                    <input type="file" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">FPO Name
                    </label>
                    <select className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" required="">
                        <option value="murhu">Select</option>
                        <option value="murhu">
                            Murhu Nari Shakti Farmer Producer Company Limited
                        </option>
                        <option value="churchu">
                            Churchu Nari Urja Farmer Producer Company Limited
                        </option>
                    </select>
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
                    className="bg-indigo-600 hover:bg-blue-dark text-white py-2 px-4"
                    type="submit"
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Farmer