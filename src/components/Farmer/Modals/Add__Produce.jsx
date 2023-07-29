import Produce__Model from "../../Forms/Model_Form/Produce__Model";

const Add__Produce = ({ closemodal }) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Enter Produce details
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
              <Produce__Model />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
              <button className="text-white uppercase text-sm lg:text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-4 py-1.5 px-4 bg-hover__color">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Add__Produce;
