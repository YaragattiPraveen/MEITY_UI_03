import React, { useState } from "react";
import Loan_Transaction_Details from "../FPO_Loan/Modal/Loan_Transaction_Details";

const Loan_History = () => {
  const [openModal,setModal] = useState(false)
  return (
    <>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
      <div className="flex flex-col px-3 py-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Loan ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Date of Application
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Loan Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      View Transaction Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      L 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      2021-10-10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      100000
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setModal(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className="text-md px-3 py-2 font-Roboto text-hover__color">Remaining Loan Window: 60000</p>
    </div>
    {openModal && <Loan_Transaction_Details closemodal={setModal} />}
    </>
  );
};

export default Loan_History;
