import Show_Bids_Status from "../Modals/Show_Bids_Status"
import useModal from "../../../hooks/useModal"

const Purchase_History = () => {
    const {modal,updateModal,closeModal} = useModal()
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
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Bid Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Lac Strain Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Source of Tree
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Origin
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Seedlac Content
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Fresh Resin Content
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            Quantity
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
                                            xhdoLftes5
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            Kusmi
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            2
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            Chattisgarh
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            seedlac                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            resin
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            350
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            <button
                                                onClick={() => updateModal("ShowPurchaseStatus")}
                                                className="bg-bg__color text-center block text-white px-4 py-1 rounded">
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
            {
                modal.state === "ShowPurchaseStatus" && <Show_Bids_Status handleClose={closeModal} />
            }
        </>
    )
}

export default Purchase_History