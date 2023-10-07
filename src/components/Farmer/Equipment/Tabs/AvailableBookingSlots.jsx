import React from 'react'

const AvailableBookingSlots = () => {
  return (

    <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 my-5">
      <div className="overflow-x-auto mx-3 md:mx-4 md:overflow-auto lg:overflow-auto">
        <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-auto">
              <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Equipment Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Equipment Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Fpo Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Rent Price/Hrs
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Number of Hrs
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-medium font-Roboto text-left"
                  >
                    Booked Slots
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-300">
                <tr className="border-b bg-box__bg__color">
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    D1245CL
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Tractor
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    FPO - 2
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    8456891234
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    300 Rs
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    07/10/2023
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    Confirmed
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                    3
                  </td>
                  <td className="px-6 py-4">
                    11:00 AM to 2:00 PM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableBookingSlots