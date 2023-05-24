import React from "react";
import Navbar from "./Navbar";

const CropAdvisory = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Crop Advisory
      </h2>
      <div className="w-full px-4 mb-2 text-center font-Roboto bg-bg__color border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex justify-end">
          <p className="text-white">18/5/2023</p>
        </div>
        <h5 className="mb-2 text-3xl font-bold text-white">
          Farmer-to-Farmer Extension
        </h5>
        <p className="mb-5 text-base text-white">
          Following the decline of investments in government extension services
          in the 1980s and 1990s, community- based extension approaches have
          become increasingly important. One such approach is farmer-to-farmer
          extension (F2FE), which is defined here as the provision of training
          by farmers to farmers, often through the creation of a structure of
          farmer-trainers.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="w-full sm:w-auto hover:text-hover__color hover:bg-box__bg__color bg-hover__color focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          >
            <div className="text-center">
              <div className="text-sm font-semibold font-Roboto">
                Read More
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full px-4 mb-2 text-center font-Roboto bg-bg__color border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex justify-end">
          <p className="text-white">1/5/2023</p>
        </div>
        <h5 className="mb-2 text-3xl font-bold text-white">
          Innovation Platforms
        </h5>
        <p className="mb-5 text-base text-white">
          Farmers, agri-business and service providers have to innovate
          continuously to adapt to an ever-changing environment (including
          markets, climate and resources). Innovation is about putting ideas
          that are new to a certain location into practice, and in this way
          changing the situation of those living in this area for the better.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="w-full sm:w-auto hover:text-hover__color hover:bg-box__bg__color bg-hover__color focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          >
            <div className="text-center">
              <div className="text-sm font-semibold font-Roboto">
                Read More
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;
