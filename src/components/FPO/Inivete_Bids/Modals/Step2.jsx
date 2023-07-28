import useModal from "../../../hooks/useModal"
import Place_Order from "../../Place_Order/Place_Order"

const Step2 = () => {
    const {modal,closeModal,updateModal} = useModal()
    return (
        <div>
            <h2 className="text-bg__color font-Roboto text-xl font-semibold mb-4">Place Order</h2>
            <div className="max-w-[250px] md:max-w-md overflow-auto bg-box__bg__color shadow-lg rounded-lg border border-gray-200 my-5">
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
                                            Input Supplier ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Supplier Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Mobile Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Bid Amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Place Order
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-silver__color">
                                    <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            64817a37c31ad03a451a9f4c
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            Input Supplier 1
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            8485257415
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            100
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            <button onClick={() => updateModal("Place_Order")}
                                                className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                                                Place Order
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal.state === "Place_Order" && <Place_Order title={"Bidding Id"} closeModal={closeModal} />
            }
        </div>
    )
}

export default Step2