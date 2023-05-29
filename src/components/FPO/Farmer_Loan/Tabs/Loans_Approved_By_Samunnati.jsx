import React, { useState } from "react";
import Repayment_Structure from "../Modals/Repayment_Structure";
import View_Loan_Application from "../Modals/View_Loan_Application";
const Loans_Approved_By_Samunnati = () => {
  const [openModel, setOpenModel] = useState(false);
  const [openLoanModel,setLoanModel] = useState(false);
  
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
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Farmer Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Farmer Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Application Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 text-medium font-Roboto text-left"
                      >
                        Loan Amount
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
                        Loan Application
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        F 1
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        Farmer Name
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        L 1
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        12-08-2021
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        10000
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                        <button
                          onClick={() => setOpenModel(true)}
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
      </div>
      {openModel && <Repayment_Structure closemodel={setOpenModel}/>}
      {openLoanModel && <View_Loan_Application closemodel={setLoanModel}/>}
    </>
  );
};

export default Loans_Approved_By_Samunnati;
