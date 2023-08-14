import { useState } from 'react';
import Image_modal from '../../../Farmer/Modals/Image_modal'
const View_Farmer_Produce = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 my-5">
        <div className="overflow-x-auto mx-2 md:mx-4 md:overflow-auto lg:overflow-auto">
          <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light table-auto">
                <thead className="text-xs bg-green-200 text-gray-600 uppercase font-Roboto">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Application Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Farmer Id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Farmer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Crop Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Variety Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-Roboto text-left"
                    >
                      Remarks
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      View Image
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12/12/2020
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      101
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Vikas Sahu
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Seed
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      S-1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      B12
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      50 Kg
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Need to sell..
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setOpenModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12/12/2020
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      102
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Vikas Sahu
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Seed
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      S-1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      B12
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      50 Kg
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Need to sell..
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setOpenModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr><tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      12/12/2020
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      103
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Vikas Sahu
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Seed
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      S-1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      B12
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      50 Kg
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Need to sell..
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      <button
                        onClick={() => setOpenModel(true)}
                        className="bg-bg__color text-center block text-white px-4 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openModel && <Image_modal title={"Stick Lac Image"} closemodel={setOpenModel} />
      }
    </>
  );
};

export default View_Farmer_Produce;
