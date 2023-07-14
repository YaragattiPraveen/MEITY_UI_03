const Loan_History = () => {
  return (
    <>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="overflow-x-auto mx-2 md:mx-4 md:overflow-auto lg:overflow-auto">
          <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light table-auto">
                <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Loan Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Loan Application Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Loan Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Loan Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Outstanding Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Next Payment Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-medium font-Roboto text-left"
                    >
                      Next Payment Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      2022-800-07
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01-05-2022
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 98765
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      13-07-2022
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 3778
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      ₹ 761434
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      24-09-2022
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loan_History;
