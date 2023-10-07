import React from "react";

const Rejected_Memberships = () => {
  return (
    <div className="flex flex-col px-3">
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
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Aadhaar Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Rejected Reason
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-300">
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Farmer 1
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Hyderabad
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    1234567890
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    12345XXXXX
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Invalid Document
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Farmer 1
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Hyderabad
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    1234567890
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    12345XXXXX
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Invalid Document
                  </td>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Farmer 1
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Hyderabad
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    1234567890
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    12345XXXXX
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Invalid Document
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

export default Rejected_Memberships;
