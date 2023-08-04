import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyIcon from '@mui/icons-material/Key';
import { useContext } from 'react';
import { AppContext } from '../Context/context';
import Sidebar from '../components/Farmer/Sidebar';
import { Outlet } from 'react-router-dom';
const AdminWrapper = () => {
    const list = [

        {
            title: "Admin Dashboard",
            icon: <AdminPanelSettingsIcon style={{ color: "white", fontSize: "28px" }} />,
            to: "admin",
        },
        {
            title: "License Key",
            icon: (
                <KeyIcon style={{ color: "white", fontSize: "28px" }} />
            ),
            to: "license-key",
        },
    ];

    const { toggleNav } = useContext(AppContext);

    return (
        <>
            <div className="flex lg:px-0 px-2">
                <div className={`w-auto h-full fixed transition-all duration-700 ease-in-out lg:ml-0 lg:z-10 ${toggleNav ? "z-30 -ml-3" : "-z-30 -ml-[300px]"}`}>
                    <Sidebar list={list} />
                </div>
                <div className="w-full lg:w-full mx-auto ml-0 lg:ml-[260px]">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AdminWrapper