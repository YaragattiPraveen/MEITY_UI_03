import Image_modal from "../../../Farmer/Modals/Image_modal";
import useModal from "../../../hooks/useModal";

const AddEquipment = ({ handleClose, title }) => {
  const { modal, updateModal, closeModal } = useModal()
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                {title} Equipment
              </h3>

              <button
                onClick={handleClose}
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
                    ID
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    placeholder="12346"
                    disabled
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Equipment Name
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    placeholder="Tractor"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Rent Price/Hrs
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <input
                    type="text"
                    placeholder="300rs"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  />
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Availability Status
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <select className="select p-2 select-bordered rounded-md border w-full max-w-full">
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 flex-col m-2">
                <div className="lg:w-1/2 sm:w-full mr-1">
                  <label className="block text-grey-darker font-Roboto text-silver__color mb-2">
                    Equipment Image
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1">
                  {
                    title === "Add" ? <input
                      type="file"
                      placeholder="Some remark"
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    /> : <button
                      onClick={() => updateModal('showEquipmentImage')}
                      className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      View
                    </button>
                  }
                </div>
              </div>
              <div className="flex items-center justify-end px-6 py-3 border-solid border-slate-200 rounded-b">
                <button
                  className="bg-bg__color text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        modal.state === "showEquipmentImage" && <Image_modal title={'Tractor'} closemodel={closeModal} />
      }
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddEquipment;