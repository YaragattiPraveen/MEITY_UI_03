import React from "react";

const Personal__information = ({ details, btn = null, setUpdateProfile }) => {
  return (
    <div>
      <div className="max-w-[520px] mx-auto my-10">
        {details?.map((item) => {
          return (
            <div
              key={item.label}
              className="flex items-center  justify-between my-5 text-silver__color font-Roboto"
            >
              <label className="md:text-lg text-sm">{item.label}</label>
              <p>-</p>
              <p className="md:text-lg text-sm">{item.value}</p>
            </div>
          );
        })}
        {btn && (
          <button
            onClick={() => setUpdateProfile(true)}
            className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            {btn}
          </button>
        )}
      </div>
    </div>
  );
};

export default Personal__information;
