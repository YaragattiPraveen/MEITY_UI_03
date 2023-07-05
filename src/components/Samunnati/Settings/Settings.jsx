import React, { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Personal__information from "../../Farmer/Settings/Personal__information";
import Profile__Update from "../../Farmer/Settings/Profile__Update";
import Navbar from "../../Farmer/Navbar";

const Settings = () => {
  const [active, setActive] = useState("tab1");
  const details = [
    { label: "Name of FPO", value: "Vivek" },
    { label: "Username", value: "FPO1234e" },
    { label: "Password", value: "XXDSEF" },
    { label: "Address", value: "XXXXXXXX,XXX,XXX" },
    { label: "City", value: "Hyderabad" },
    { label: "State", value: "Telangana" },
    { label: "Pincode", value: "500XXX" },
    { label: "Contact Number", value: "+XX-546XXXXX" },
    { label: "Email", value: "email@email.com" },
    { label: "Website", value: "www.email.com" },
    { label: "Date of Incorporation", value: "12-10-2021" },
    { label: "PAN Number", value: "XXXX-XXXX-XXXX" },
    { label: "Registaration Number", value: "XXXXXXXXXX" },
    { label: "Number of Shareholders", value: "CVXXXXXXXX" },
    { label: "Bank Name", value: "XXXXXXXXXX" },
    { label: "Account Number", value: "XXXXXXXXXX" },
    { label: "IFSC Code", value: "500XXX" },
    { label: "Upload Document", value: "500XXX" },
    { label: "Director Name", value: "500XXX" },
    { label: "Director Mobile Number", value: "500XXX" },
    { label: "Director Gender", value: "500XXX" },
    { label: "Copy of Bylaws", value: "500XXX" },
    { label: "Certificate of Incorporation", value: "500XXX" },
    { label: "GST Certificate", value: "500XXX" },
    { label: "Lincese Key", value: "500XXX" },
  ];
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
        Settings
      </h2>

      <div className="bg-box__bg__color py-10 px-4 md:px-10 rounded-lg mb-6">
        <div className="flex items-center justify-center">
          <PermContactCalendarIcon
            style={{ color: "white", fontSize: "65px" }}
            className="bg-bg__color rounded-xl"
          />
        </div>
        <div className="flex gap-2 justify-between py-3 mx-auto md:max-w-[400px]">
          <button
            onClick={() => setActive("tab1")}
            style={{
              borderBottom: active === "tab1" && "2px solid green",
            }}
            className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
          >
            Personal Information
          </button>
          <button
            onClick={() => setActive("tab2")}
            style={{
              borderBottom: active === "tab2" && "2px solid green",
            }}
            className="text-hover__color shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 font-Roboto text-sm md:text-base font-bold cursor-pointer"
          >
            Profile Update
          </button>
        </div>

        {active === "tab1" ? (
          <Personal__information details={details} />
        ) : (
          <Profile__Update />
        )}
      </div>
    </div>
  );
};

export default Settings;
