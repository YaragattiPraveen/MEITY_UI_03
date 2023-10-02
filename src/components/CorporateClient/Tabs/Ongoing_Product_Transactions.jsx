import useModal from "../../hooks/useModal";
import ShowOngoingTransactions from "../Modals/Ongoing_Transactions/ShowOngoingTransactions";

const Ongoing_Product_Transactions = () => {
  const { modal, closeModal, updateModal } = useModal();
  return (
    <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200 my-5">
      <div className="overflow-x-auto mx-2 md:mx-4 md:overflow-auto lg:overflow-auto">
        <div className="relative inline-block min-w-full py-2 sm:px-2 lg:6">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light table-auto">
              <thead className="text-xs bg-green-200 text-gray-600 uppercase font-Roboto">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Fpo Id
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Fpo Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Fpo Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Requsted Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Crop Name
                  </th>
                  <th scope="col" className="px-4 py-4 font-Roboto text-left">
                    Price/Kg
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-4 text-medium font-Roboto text-left"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-silver__color">
                <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    xhdoLftes6
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    Fpo - 1
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    8897564123
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    45 Kg
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    Rai Seeds
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    79 Rs
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                    <button
                      onClick={() => {
                        updateModal("ShowOrderDetails");
                      }}
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
      {modal.state === "ShowOrderDetails" && (
        <ShowOngoingTransactions show={true} handleClose={closeModal} />
      )}
    </div>
  );
};

export default Ongoing_Product_Transactions;
