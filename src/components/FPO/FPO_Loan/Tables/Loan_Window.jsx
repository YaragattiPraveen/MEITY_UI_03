import React from "react";

const Loan_Window = () => {
  return (
    <div className="relative h-auto mx-2 overflow-x-auto my-4 p-2 bg-box__bg__color shadow-md sm:rounded-lg">
      <table className="w-auto text-sm text-left font-Roboto">
        <thead className="text-xs bg-green-200 text-gray-600 uppercase font-Roboto"></thead>
        <tbody className="text-silver__color">
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <th className="px-4 uppercase py-4 text-medium font-Roboto text-left">
              Loan window Id
            </th>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              :
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Sum-TW-1
            </td>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <th className="px-4 uppercase py-4 text-medium font-Roboto text-left">
              Loan window amount
            </th>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              :
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              5,00,000
            </td>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <th className="px-4 uppercase py-4 text-medium font-Roboto text-left">
              Loan window tenure
            </th>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              :
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              tenure-1
            </td>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <th className="px-4 uppercase py-4 text-medium font-Roboto text-left">
              Status
            </th>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              :
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              <button
                onClick={() => setOpenModel(true)}
                className="bg-bg__color text-center block text-white px-4 py-1 rounded"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loan_Window;
