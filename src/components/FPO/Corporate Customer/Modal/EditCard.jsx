import Custom_Confirmation_Box from "../../../Utils/Custom_Confirmation_Box";
import useModal from "../../../hooks/useModal";

const EditCard = ({ handleClose,title }) => {
  const { modal, closeModal, updateModal } = useModal();
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                {title} Item Details
              </h3>

              <button
                onClick={handleClose}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/* Body */}
            <div className="relative px-6 py-3 flex-auto">
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block font-Roboto text-silver__color mb-2 mt-3">
                    Crop Name
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                    Crop Variety
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                    Grade
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                    Available Quantity
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="number"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                    Price / Kg
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="number"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Item Status
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <select className="select border rounded w-full py-2 px-3 text-grey-darker">
                    <option>Select the status</option>
                    <option>Available</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color  mb-2 mt-3">
                    Upload Item Image
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="file"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <button
                onClick={() => updateModal("ShowConfirmationBox")}
                className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 mt-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear w-full transition-all duration-150"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal.state === "ShowConfirmationBox" && (
        <Custom_Confirmation_Box handleClose={closeModal} />
      )}
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditCard;
