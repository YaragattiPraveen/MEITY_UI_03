const Invite_Bids = () => {
    return (
        <>
            <div className="relative h-auto my-4 p-2 bg-box__bg__color shadow-md sm:rounded-lg">
                <div className="overflow-x-auto sm:-mx-6">
                    <div className="inline-block min-w-full sm:px-6">
                        <table className="w-full my-3 text-sm text-left font-Roboto">
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
                                        Name of Corporate Customer
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
                                        Date of Supply
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 text-medium font-Roboto text-left"
                                    >
                                        End date of Bidding
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-4 py-4 text-medium font-Roboto text-left"
                                    >
                                        Information
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
                                        1
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        Corporate Customer - 1
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        3
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        13-07-2023
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        18-07-2023
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                                            View
                                        </button>
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-4 text-left font-medium font-Roboto text-silver__color">
                                        <button className="bg-bg__color text-center block text-white px-4 py-1 rounded">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invite_Bids