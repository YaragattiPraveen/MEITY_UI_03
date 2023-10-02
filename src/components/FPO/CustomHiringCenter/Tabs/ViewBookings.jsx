import React from "react";

const ViewBookings = () => {
  return (
    <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
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
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Village
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Cluster Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Equipment Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Equipment Name
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-300">
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    125684
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Farmer - 001
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Gachibowli
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    9789546123
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Cluster - 1
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    27/09/2023
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    1:30 PM to 4:45 PM
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    123578
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Tracktor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookings;
