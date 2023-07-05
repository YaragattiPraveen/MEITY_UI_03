import React from "react";
import Navbar from "../../Farmer/Navbar";

const FPO_Info = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4">
        FPO Information
      </h2>
      <div className="bg-box__bg__color shadow-lg rounded-lg border  border-gray-200">
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
                        CEO Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        L 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        FPO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        CEO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        1234567890
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        fpo1@gmail.com
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Location 1
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        L 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        FPO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        CEO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        1234567890
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        fpo1@gmail.com
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Location 1
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        L 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        FPO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        CEO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        1234567890
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        fpo1@gmail.com
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Location 1
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        L 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        FPO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        CEO 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        1234567890
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        fpo1@gmail.com
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Location 1
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FPO_Info;
