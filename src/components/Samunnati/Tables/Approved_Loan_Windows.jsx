import { useState } from "react";
import Repayment_Structure from '../FPO_Loan/Modal/Repayment_Structure'
const Approved_Loan_Windows = ({ setLoanInfo }) => {
  const [openModal, setModal] = useState(false)
  return (
    <>
      <div className="overflow-x-auto mx-2 md:mx-4 md:overflow-auto lg:overflow-auto">
        <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-auto">
              <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Date of Loan Window Approval
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    FPO ID
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Name of FPO
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    FPO Contact
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Granted Window Amount
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
                    Number of Pending Loan Requests
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    View Loan Requests
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-300">
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    2021-10-10
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    F444444
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    FPO 4
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    1234567890
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    50000
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    <button
                      onClick={() => setModal(true)}
                      className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                    >
                      View
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    2
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    <button
                      onClick={() => setLoanInfo(true)}
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
      {openModal && <Repayment_Structure closemodal={setModal} />}
    </>
  );
};

export default Approved_Loan_Windows;
