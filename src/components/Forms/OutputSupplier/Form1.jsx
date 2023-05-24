import React from "react";
import { Link } from 'react-router-dom'

const Form1 = () => {
  return (
    <>
      <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label
            className="block text-grey-darker font-Roboto text-black__color mb-2"
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
            className="block text-grey-darker font-Roboto text-black__color mb-2"
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
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Password
          </label>
          <input
            type="password"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Address
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>

      <div className="md:flex lg:flex-row mb:4 flex-col m-2">
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">
            Contact Number
          </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
        <div className="lg:w-1/2 sm:w-full mr-1">
          <label className="block text-grey-darker font-Roboto text-black__color mb-2">City </label>
          <input
            type="text"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          />
        </div>
      </div>
      <p className="text-center my-4">
        <a
          href="#"
          className="text-silver__color no-underline text-[15px] font-Roboto hover:text-grey-darker"
        >
          I already have an account?{" "}
          <Link
            to="/"
            className="text-bg__color hover:text-indigo-600 text-base font-Roboto"
          >
            Sign In
          </Link>
        </a>
      </p>
    </>
  );
};

export default Form1;
