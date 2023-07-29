import { useState } from "react";
import useModal from "../../hooks/useModal";
import Navbar from "../Navbar";
import Place_Requirement from "./Modal/Place_Requirement";
const Input_Requirement = () => {
  const { modal, updateModal, closeModal } = useModal();

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
        Input Requirement
      </h2>
      <div className="flex justify-end">
        <button
          onClick={() => updateModal("ShowPlaceRequirement")}
          className="text-white uppercase text-sm shadow-md rounded z-0 focus:outline-none font-Roboto mb-6 py-1.5 px-4 bg-hover__color"
        >
          Place Requirement
        </button>
      </div>

      <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 mb-8">
        <div className="overflow-x-auto mx-3 md:mx-3 md:overflow-auto lg:overflow-auto">
          <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
            <h2 className="text-hover__color uppercase text-xl lg:text-lg font-Roboto font-extrabold py-2">
              Previous Requirements
            </h2>
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light table-auto">
                <thead className="text-xs text-medium bg-green-200 border-b uppercase text-gray-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Application Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Input Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Input Variant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-medium font-Roboto text-left"
                    >
                      Month
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-300">
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/06/23
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Seed
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Variant 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-19
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      25 Kg
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      June
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/03/23
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Pesticide
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Pesticide 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-20
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      5 L
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      March
                    </td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      01/05/23
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Fertilizer
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      Fertilizer 1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      TC-37
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      15 L
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                      May
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modal.state === "ShowPlaceRequirement" && (
        <Place_Requirement closemodal={closeModal} />
      )}
    </div>
  );
};

export default Input_Requirement;
