import useModal from "../../../hooks/useModal"
import Show_Quote_Status from "../Modals/Show_Quote_Status"

const Requested_Quotes = () => {
    const { modal, closeModal, updateModal } = useModal()
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
                                            Quotation Id
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
                                            Start Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-4 text-medium font-Roboto text-left"
                                        >
                                            End Date
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
                                            Input Supplier - 1
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            2023-07-23
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            2023-07-25
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                            <button
                                                onClick={() => updateModal("QuoteStatus")}
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
                modal.state === "QuoteStatus" && <Show_Quote_Status handleClose={closeModal} />
            }
        </>
    )
}

export default Requested_Quotes