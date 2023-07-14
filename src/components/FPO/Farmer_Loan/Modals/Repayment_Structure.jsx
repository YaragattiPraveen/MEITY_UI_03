import { useState } from "react";
import Add_Repayment from "../Modals/Add_Repayment";

const Repayment_Structure = ({ closemodel }) => {
  const [openAddRepayment, setOpenAddRepayment] = useState(false)
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 max-w-[300px] mx-auto md:max-w-lg lg:max-w-4xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Repayment Structure
              </h3>
              <button
                onClick={() => {
                  closemodel(false);
                }}
                className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative px-6 py-3 flex-auto">
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Loan ID :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    12345
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Loan Period in Months :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    1
                  </label>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Farmer Name :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    abcd
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    No of Repayment Per Year :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    1
                  </label>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Annual Interest Rate :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    14%
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    Loan Amount :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    400
                  </label>
                </div>
              </div>
              <div className="md:flex lg:flex-row mb:4 m-2 flex-col">
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal">
                  <label
                    className="block text-grey-darker font-Roboto text-hover__color mb-2"
                    htmlFor="Loan ID"
                  >
                    FPO Name :
                  </label>
                  <label
                    className="block px-10 text-grey-darker font-Roboto text-silver__color mb-2"
                    htmlFor="Loan ID"
                  >
                    abcd
                  </label>
                </div>
                <div className="lg:w-1/2 sm:w-full mr-1 flex items-center justify-normal"></div>
              </div>
              <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 my-5">
                <div className="flex flex-col px-3">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                S.No.
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Scheduled Repayment Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Scheduled EMI Amount
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Repayment Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm divide-y divide-gray-300">
                            <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                1
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                12-07-2021
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                ₹ 900
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                                <button
                                  onClick={() => setOpenAddRepayment(true)}
                                  className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                                >
                                  Add Repayment
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {openAddRepayment && <Add_Repayment closemodel={setOpenAddRepayment} />}
    </>
  );
};

export default Repayment_Structure;
