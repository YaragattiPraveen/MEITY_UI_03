import React, { useState } from "react";
import Image_modal from '../../../Farmer/Modals/Image_modal'
const View_Farmer_Produce = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
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
                        className="px-6 py-4 text-medium font-Roboto text-left"
                      >
                        Item name
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
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Vikas Sahu
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Stick Lac
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
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Vikas Sahu
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Stick Lac
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
                        2022-800-07
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Vikas Sahu
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Stick Lac
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
      </div>
      {openModel && <Image_modal title={"Stick Lac Image"} closemodel={setOpenModel}/>}
    </>
  );
};

export default View_Farmer_Produce;
