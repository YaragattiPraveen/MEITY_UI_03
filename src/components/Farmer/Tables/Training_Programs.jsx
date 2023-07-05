import React from "react";

const Training_Programs = () => {
  return (
    <div className="container w-full mx-auto">
      <div className="mb-2 px-2 bg-box__bg__color shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-hover__color text-xl font-Roboto font-extrabold py-3 ">
          Training Programs
        </h2>
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
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        17-02-22
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        --
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        17-02-22
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        --
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        17-02-22
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        --
                      </td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        17-02-22
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        --
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

export default Training_Programs;
