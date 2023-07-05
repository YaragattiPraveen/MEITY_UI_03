import React from "react";

const Update_Profile = ({ profileUpdate,setUpdateProfile }) => {
  return (
    <div>
      <div className="max-w-[520px] mx-auto my-10">
        {profileUpdate?.map((item) => {
          return (
            <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
              <label className="text-lg">{item.label}</label>
              {item.value}
            </div>
          );
        })}
        <div className="flex justify-between">
          <button onClick={() => setUpdateProfile(false)}
            className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Back to Profile
          </button>
          <button
            className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update_Profile;
