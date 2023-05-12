import React from 'react'
import { Link } from 'react-router-dom'
const Samunnati = () => {
    return (
        <div className="py-4 px-8">
            <h1 className='font-Roboto text-2xl text-bg__color border-grey-lighter font-semibold text-center pb-5'>Samunnati Signup</h1>

            <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label
                        className="block text-silver__color font-Roboto mb-2 text-[17px]"
                        htmlFor="first_name"
                    >
                        Username
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-silver__color hover:border-hover__color outline-none"
                        id="first_name"
                        type="text"
                    />
                </div>
                <div className="lg:w-1/2 sm:w-full ml-1">
                    <label
                        className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color"
                        id="last_name"
                        type="password"
                    />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Contact Number    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Email    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Address    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">City    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">State   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Pincode   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
            </div>

            <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Website    </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                    <label className="block text-grey-darker text-[17px] font-Roboto text-silver__color mb-2">Pincode   </label>
                    <input type="text" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none hover:border-hover__color" />
                </div>
            </div>

            <p className="text-center my-4">
                <a
                    href="#"
                    className="text-silver__color no-underline text-[15px] font-Roboto hover:text-grey-darker"
                >
                    I already have an account? <Link to='/' className='text-bg__color hover:text-indigo-600 text-base font-Roboto'>Sign In</Link>
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

export default Samunnati