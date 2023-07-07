const Completed_Transactions = () => {
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
                                                Bid Id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-medium font-Roboto text-left"
                                            >
                                                Date of Invoice
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-medium font-Roboto text-left"
                                            >
                                                Invoice Number
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-medium font-Roboto text-left"
                                            >
                                                Total Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-4 text-medium font-Roboto text-left"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-300">
                                        <tr className="border-b transition duration-300 ease-in-out hover:bg-green-2">
                                            <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                                tc_ydsK7GE
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                                2023-07-08
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                                145224512
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                                100
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-left font-medium font-Roboto text-silver__color">
                                                <button
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
        </>
    )
}

export default Completed_Transactions