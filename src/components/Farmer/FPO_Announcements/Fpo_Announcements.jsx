import React from "react";
import Navbar from "../Navbar";
const Fpo_Announcements = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
        Announcements from FPO
      </h2>
      <div
        className="max-w-sm bg-bg__color border border-gray-200 rounded-lg shadow
       transform hover:scale-105 transition duration-500"
      >
        <img
          className="rounded-t-lg"
          src="https://plus.unsplash.com/premium_photo-1667546569341-1136d35ab1fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="px-5 py-3 flex justify-between items-center">
          <h2 className="text-lg text-center pt-3 font-Roboto font-bold text-white">
            Post 1 from FingerprintIcon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Fpo_Announcements;
