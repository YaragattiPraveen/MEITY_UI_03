import React from "react";
import Navbar from "../../Farmer/Navbar";

const Announcement_For_Farmer = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <div className="bg-box__bg__color py-10 px-10 my-10 rounded-lg max-w-[768px] mx-auto">
        <h2 className="text-hover__color text-2xl text-center font-Roboto font-extrabold pb-5 ">
          Announcement Post For Farmer
        </h2>
        {/*   tip; mx-auto -- jagab ilusti keskele  */}
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-Roboto font-medium text-hover__color"
            >
              Heading
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
              placeholder=""
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 font-Roboto font-medium text-hover__color"
            >
              Description
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full outline-hover__color text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Description..."
              defaultValue={""}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-Roboto font-medium text-hover__color"
            >
              Attach Image
            </label>
            <input
              type="file"
              id="email"
              className="w-full py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
              placeholder="name@abc.com"
              required=""
            />
          </div>

          <button
            type="submit"
            className=" my-5 text-white bg-hover__color hover:bg-bg__color font-medium rounded-lg text-sm px-10 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Announcement_For_Farmer;
