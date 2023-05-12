import React from 'react'
import { Link } from 'react-router-dom'
const OutputSupplier = () => {
    return (
        <div className="py-4 px-8">
            <h1 className='text-indigo-600 text-2xl border-grey-lighter font-semibold text-center pb-5'>Output Supplier</h1>

            <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-grey-darker text-sm mb-2"
                        htmlFor="first_name"
                    >
                        Client Name
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
                        htmlFor="Username"
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
                    <label className="block text-grey-darker text-sm mb-2">Password     </label>
                    <input type="password" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Address     </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Contact Number</label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">City    </label>
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
                    <label className="block text-grey-darker text-sm mb-2">Website   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Lincese Key   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>
            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">CI Number  </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">GST Number   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-sm mb-2">Lincese Key </label>
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

export default OutputSupplier