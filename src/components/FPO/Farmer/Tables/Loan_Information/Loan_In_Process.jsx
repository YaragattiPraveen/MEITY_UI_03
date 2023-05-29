import React, { useState } from "react";
import Loan_Application_modal from "../../Modals/Loan_Application_modal";

const Loan_In_Process = () => {
  const [openModel, setOpenModel] = useState(false);
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
                        Loan Id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Application Date
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
                        Loan Application
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        01-05-2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        ₹ 98765
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button className="bg-yellow-600 text-center block text-white px-4 py-1 rounded">
                          In-Progress
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        01-05-2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        ₹ 98765
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button className="bg-yellow-600 text-center block text-white px-4 py-1 rounded">
                          Pending with samunnati
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        01-05-2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        ₹ 98765
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button className="bg-yellow-600 text-center block text-white px-4 py-1 rounded">
                          In-Progress
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        01-05-2022
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        ₹ 98765
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
                          className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button className="bg-yellow-600 text-center block text-white px-4 py-1 rounded">
                          Pending with samunnati
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
      {openModel && <Loan_Application_modal closemodel={setOpenModel} />}
    </>
  );
};

export default Loan_In_Process;
