import React from "react";

const Profile__Update = () => {
  return (
    <div className="flex items-center justify-center py-6 md:p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="block mb-2 font-Roboto font-medium text-hover__color"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder=""
                  className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="block mb-2 font-Roboto font-medium text-hover__color"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder=""
                  className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="block mb-2 font-Roboto font-medium text-hover__color"
                >
                  Old Password
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder=""
                  className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="lName"
                  className="block mb-2 font-Roboto font-medium text-hover__color"
                >
                  New Password
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder=""
                  className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="fName"
                  className="block mb-2 font-Roboto font-medium text-hover__color"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder=""
                  className="w-full py-2 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="text-white uppercase text-sm lg:text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile__Update;
