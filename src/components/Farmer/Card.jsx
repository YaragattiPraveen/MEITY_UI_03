import React from "react";

const Card = () => {
  return (
    <>
      <div
        className="max-w-sm mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
       transform hover:scale-105 transition duration-500"
      >
        <img
          className="rounded-t-lg"
          src="https://plus.unsplash.com/premium_photo-1667546569341-1136d35ab1fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <h2 className="text-lg text-center pt-3 font-Roboto font-bold text-white">
          Nylon Bag
        </h2>
        <div className="px-5 py-3 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="mb-1 text-base font-Roboto tracking-tight text-white">
              Market Price
            </p>
            <p className="text-white text-base font-Roboto">500</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-1 text-base font-Roboto tracking-tight text-white">
              FPO Price
            </p>
            <p className="text-white font-Roboto">450</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
