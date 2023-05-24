import React from "react";

const Pending_Applications = () => {
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
                    Farmer Application Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-medium font-Roboto text-left"
                  >
                    Membership Status
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
                    <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                      View
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    <select className="select p-2 select-bordered w-full max-w-xs">
                      <option selected>
                        Select
                      </option>
                      <option>Approve</option>
                      <option>Reject</option>
                    </select>
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
                    <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                      View
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    <select className="select p-2 select-bordered w-full max-w-xs">
                      <option selected>
                        Select
                      </option>
                      <option>Approve</option>
                      <option>Reject</option>
                    </select>
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
                    <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                      View
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    <select className="select p-2 select-bordered w-full max-w-xs">
                      <option selected>
                        Select
                      </option>
                      <option>Approve</option>
                      <option>Reject</option>
                    </select>
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

export default Pending_Applications;
