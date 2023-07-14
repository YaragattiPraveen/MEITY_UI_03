import Navbar from "../Navbar";
const Purchase_Authentication = () => {
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        Purchase orders history
      </h2>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-2 border-gray-200">
        <div className="flex flex-col p-3">
          <h3 className="text-hover__color text-lg md:text-xl font-semibold font-Roboto py-2">
            Current Purchase
          </h3>
          <div className="overflow-x-auto px-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-3 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Order ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Item Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Date of Order
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Payment Mode
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 text-medium font-Roboto text-left"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        SAM107254367
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        Fertilizer
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        Fertilizer
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        3 L
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        17/2/22
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        Cash
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-left font-medium font-Roboto text-silver__color">
                        <select className="select p-2 select-bordered w-full max-w-xs">
                          <option>Select</option>
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
      </div>
    </div>
  );
};

export default Purchase_Authentication;
