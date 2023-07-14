import { useState } from "react";
import Loan_Window_Application_Modal from '../FPO_Loan/Modal/Loan_Window_Application_Modal'
const Pending_Loan_Windows = () => {
  const [openModal, setModal] = useState(false);
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
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Date of Application
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    FPO ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Name of FPO
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Contact No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Requested Window Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Loan Window Application
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-300">
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    2021-10-10
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    F555555
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    FPO 5
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    1234567890
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
      {openModal && <Loan_Window_Application_Modal closemodal={setModal} />}
    </>
  );
};

export default Pending_Loan_Windows;
