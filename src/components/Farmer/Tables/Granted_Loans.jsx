import React, { useState } from "react";
import Loan_Application from "../Modals/Loan_Application";
import Repayment_Structure from "../Modals/Repayment_Structure";

const Granted_Loans = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openRepaymentModel,setRepaymentModel] = useState(false)

  return (
    <div className="relative h-auto mx-5 overflow-x-auto my-4 p-2 bg-box__bg__color shadow-md sm:rounded-lg">
      <table className="w-auto text-sm text-left font-Roboto">
        <thead className="text-xs bg-green-200 text-gray-600 uppercase font-Roboto">
          <tr>
            <th scope="col" className="px-4 py-3">
              Loan Id
            </th>
            <th scope="col" className="px-4 py-3">
              Loan application date
            </th>
            <th scope="col" className="px-4 py-3">
              Loan amount
            </th>
            <th scope="col" className="px-4 py-3">
              Interest rate
            </th>
            <th scope="col" className="px-4 py-3">
              Loan date
            </th>
            <th scope="col" className="px-4 py-3">
              Outstanding amount
            </th>
            <th scope="col" className="px-4 py-3">
              Next payment amount
            </th>
            <th scope="col" className="px-4 py-3">
              Next payment date
            </th>
            <th scope="col" className="px-4 py-3">
              Loan Application
            </th>
            <th scope="col" className="px-4 py-3">
              Repayment structure
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-silver__color">
          <tr className="border-b bg-box__bg__color">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <button
                onClick={() => setOpenModel(true)}
                className="bg-bg__color text-center block text-white px-4 py-1 rounded"
              >
                View
              </button>
            </td>
            <td className="px-6 py-4">
              <button onClick={() => setRepaymentModel(true)} className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                View
              </button>
            </td>
            <td className="px-6 py-4">In Progress</td>
          </tr>
          <tr className="border-b bg-box__bg__color">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <button
                onClick={() => setOpenModel(true)}
                className="bg-bg__color text-center block text-white px-4 py-1 rounded"
              >
                View
              </button>
            </td>
            <td className="px-6 py-4">
              <button onClick={() => setRepaymentModel(true)} className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                View
              </button>
            </td>
            <td className="px-6 py-4">In Progress</td>
          </tr>
          <tr className="border-b bg-box__bg__color">
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <button
                onClick={() => setOpenModel(true)}
                className="bg-bg__color text-center block text-white px-4 py-1 rounded"
              >
                View
              </button>
            </td>
            <td className="px-6 py-4">
              <button onClick={() => setRepaymentModel(true)} className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                View
              </button>
            </td>
            <td className="px-6 py-4">In Progress</td>
          </tr>
        </tbody>
      </table>
      {openModel && <Loan_Application closemodel={setOpenModel} />}
      {openRepaymentModel && <Repayment_Structure closemodel={setRepaymentModel}/>}
    </div>
  );
};

export default Granted_Loans;
