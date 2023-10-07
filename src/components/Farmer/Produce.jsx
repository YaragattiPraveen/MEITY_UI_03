import Add__Produce from "./Modals/Add__Produce";
import useModal from "../hooks/useModal";
import Image_Modal from "../Farmer/Modals/Image_modal"
const Produce = () => {
  const { modal, updateModal, closeModal } = useModal();
  return (
    <>
      <div className="bg-box__bg__color shadow-lg rounded-lg border my-6 border-gray-200">
        <div className="flex justify-end">
          <button
            onClick={() => updateModal("ShowAddProduce")}
            className="text-white text-sm uppercase shadow-md rounded z-0 focus:outline-none px-4 py-2 font-Roboto m-3 bg-hover__color"
          >
            Enter Produce
          </button>
        </div>
        <div className="flex flex-col p-3">
          <div className="overflow-x-auto md:mx-4 md:overflow-auto">
            <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light table-auto">
                  <thead className="text-xs bg-green-200 border-b uppercase text-gray-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 font-Roboto text-left"
                      >
                        Date
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
                      <th scope="" className="px-6 py-4 font-Roboto text-left">
                        View Image
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-100">
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        12/12/2020
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Rice - 12
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Seed
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        B12
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        100
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                        Good
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center font-medium font-Roboto">
                        <button onClick={() => updateModal("ShowImage")} className="px-3 text-white__color py-1 rounded-sm bg-bg__color">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {modal.state === "ShowAddProduce" && (
          <Add__Produce closemodal={closeModal} />
        )}
        {
          modal.state === "ShowImage" && (<Image_Modal title={"Wheat - 1"} closemodel={closeModal}/>)
        }
      </div>
    </>
  );
};

export default Produce;
