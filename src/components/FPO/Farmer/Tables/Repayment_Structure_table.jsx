import React from "react";

const Repayment_Structure = () => {
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
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Payment Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Payment Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Principle Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Interest Amount
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
                      123456
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-09-2021
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 400
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      Pending
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      123456
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-09-2021
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 400
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      In-Progress
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      123456
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-09-2021
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 400
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      Pending
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      123456
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12-09-2021
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 400
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      14%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto text-silver__color">
                      In-Progress
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repayment_Structure;
