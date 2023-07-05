import React, { useState } from "react";
import Aggregate_Repayment from "../Modals/Aggregate_Repayment";
import Loan_Application from "../Modals/Loan_Application"

const Approved_Application = () => {
  const [openRepaymentModel,setRepaymentModel] = useState(false)
  const [openLoanModel,setLoanModel] = useState(false)
  return (
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
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Date of Application
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Date of Approved
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Subscription Tenure
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Interest Rate
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Repayment Structure
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-medium font-Roboto text-left"
                    >
                      Loan Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      Subscription
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 5000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setRepaymentModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setLoanModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      Subscription
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 5000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setRepaymentModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setLoanModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-03-2022
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      Subscription
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 5000
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setRepaymentModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setLoanModel(true)}
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
      {openLoanModel && <Loan_Application closemodel={setLoanModel}/>}
      {openRepaymentModel && <Aggregate_Repayment closemodel={setRepaymentModel}/>}
    </div>
  );
};

export default Approved_Application;
