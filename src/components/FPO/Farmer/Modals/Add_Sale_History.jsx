import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Add_Sale_History = ({ closemodel }) => {
  const [noOfPurchaseRows, setNoOfPurchaseRows] = useState(1);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-4 mx-auto max-w-xs md:mx-w-sm lg:max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold font-Roboto py-3">
                Sale History
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
                                Sale Id
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Date of Sale
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Type of Lac
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Rate/Unit
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Amount
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-4 text-medium font-Roboto text-left"
                              >
                                Remarks
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm divide-y divide-gray-300">
                            {[...Array(noOfPurchaseRows)].map(
                              (elementInArray, index) => {
                                return (
                                  <tr
                                    key={index}
                                    className="border-b transition duration-300 ease-in-out hover:bg-green-2"
                                  >
                                    <td className="whitespace-nowrap text-left font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="SAM107254367"
                                      />
                                    </td>
                                    <td className="whitespace-nowrap text-left font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="17-02-22"
                                      />
                                    </td>
                                    <td className="whitespace-nowrap text-left  font-medium font-Roboto text-silver__color">
                                      <select className="select text-center py-2 select-bordered w-full max-w-xs">
                                        <option selected>Select</option>
                                        <option>Shell Lac</option>
                                        <option>Stick Lac</option>
                                      </select>
                                    </td>
                                    <td className="whitespace-nowrap text-left font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="2 Kg"
                                      />
                                    </td>
                                    <td className="whitespace-nowrap text-center font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="2"
                                      />
                                    </td>
                                    <td className="whitespace-nowrap text-center font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="₹ 400"
                                      />
                                    </td>
                                    <td className="whitespace-nowrap text-center font-medium font-Roboto text-silver__color">
                                      <input
                                        type="text"
                                        className="text-center py-1.5"
                                        placeholder="Remarks"
                                      />
                                    </td>
                                    <td>
                                      <HighlightOffIcon
                                        onClick={() =>
                                          setNoOfPurchaseRows(
                                            noOfPurchaseRows - 1
                                          )
                                        }
                                        style={{
                                          cursor: "pointer",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <button
                onClick={() => setNoOfPurchaseRows(noOfPurchaseRows + 1)}
                className="bg-bg__color text-center block text-white px-4 py-1 rounded"
              >
                Add Details
              </button>
              <div className="flex items-center gap-2">
                <p>Total Sum:</p>
                <input type="text" className="border p-1" />
              </div>
            </div>
            <div className="flex items-center text-bg__color justify-between px-5 py-2 border-b border-solid border-slate-200 rounded-t">
              <div></div>
              <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                Submit
              </button>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Add_Sale_History;
