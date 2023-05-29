import React, { useState } from "react";
import Loan_Application from "../Modals/Loan_Application";
import Repayment_Structure from "../Modals/Repayment_Structure";

const Granted_Loans = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openRepaymentModel, setRepaymentModel] = useState(false);

  return (
    <>
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
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Id
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Loan application date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Loan amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Interest rate
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Loan date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Outstanding amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Next payment amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Next payment date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Application
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Repayment structure
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b bg-box__bg__color">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Silver
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Laptop
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        $2999
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Silver
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Laptop
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        $2999
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Silver
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Laptop
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setRepaymentModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="px-6 py-4">In Progress</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Granted_Loans;
