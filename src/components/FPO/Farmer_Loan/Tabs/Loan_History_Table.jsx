import React from "react";

const Loan_History_Table = () => {
  return (
    <div className="relative h-auto mx-2 overflow-x-auto my-4 p-2 bg-box__bg__color shadow-md sm:rounded-lg">
      <table className="w-auto text-sm text-left font-Roboto">
        <thead className="text-xs bg-green-200 text-gray-600 uppercase font-Roboto">
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
              Loan Date
            </th>
            <th
              scope="col"
              className="px-4 py-4 text-medium font-Roboto text-left"
            >
              Outstanding Amount
            </th>
            <th
              scope="col"
              className="px-4 py-4 text-medium font-Roboto text-left"
            >
              Next Payment Amount
            </th>
            <th
              scope="col"
              className="px-4 py-4 text-medium font-Roboto text-left"
            >
              Next Payment Date
            </th>
          </tr>
        </thead>
        <tbody className="text-silver__color">
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Id
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Name
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              2022-800-07
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              01-05-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 98765
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              13-07-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 3778
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 761434
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              24-09-2022
            </td>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Id
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Name
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              2022-800-07
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              01-05-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 98765
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              13-07-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 3778
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 761434
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              24-09-2022
            </td>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Id
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              Farmer Name
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              2022-800-07
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              01-05-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 98765
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              13-07-2022
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 3778
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              ₹ 761434
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
              24-09-2022
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loan_History_Table;
