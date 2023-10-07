import { months } from "../../../Utils/Const";
const Place_Requirement = ({ closemodal }) => {


  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Farmer Loan
              </h3>
              <button
                onClick={closemodal}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/*body*/}

            <div className="relative px-6 py-3 flex-auto">
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Input Type
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <select className="select p-2 select-bordered border rounded-md w-full max-w-full">
                    <option>Seed</option>
                    <option>Pesticide</option>
                    <option>Fertilizer</option>
                  </select>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Input Variant
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    placeholder="Enter the variant"
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Brand
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    placeholder="Enter the Brand Name"
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Quantity
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <div className="flex items-center justify-between border rounded-md">
                    <input
                      type="number"
                      placeholder="Enter the quantity"
                      className="select p-2 select-bordered w-full border-r max-w-full"
                    />
                    <select className="select p-2 select-bordered w-full max-w-full">
                      <option>Select in KG/L</option>
                      <option>Kg</option>
                      <option>L</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Month
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <select className="select p-2 select-bordered rounded-md border w-full max-w-full">
                    <option>Select Month</option>
                    {months.map((month, ind) => (
                      <option key={ind}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-4 py-3 rounded-b">
              <button
                className="text-white uppercase text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color"
                type="button"
              >
                Submit Requirement
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Place_Requirement;
