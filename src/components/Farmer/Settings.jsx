import React, { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Personal__information from "./Settings/Personal__information";
import Profile__Update from "./Settings/Profile__Update";
import Navbar from "./Navbar";

const Settings = () => {
  const [active, setActive] = useState("tab1");
  const details = [
    { label: "Name", value: "--" },
    { label: "Mobile Number", value: "--" },
    { label: "Date of Birth", value: "--" },
    { label: "Father Name", value: "--" },
    { label: "Address", value: "--" },
    { label: "Aadhaar Number", value: "--" },
    { label: "PAN Number", value: "--" },
];
  
  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Settings
      </h2>

      <div className="bg-box__bg__color py-10 px-10 rounded-lg mb-6">
        <div className="flex items-center justify-center">
          <PermContactCalendarIcon
            style={{ color: "white", fontSize: "65px" }}
            className="bg-bg__color rounded-xl"
          />
        </div>
        <div className="flex items-center justify-between my-5 max-w-[380px] mx-auto">
          <button onClick={() => setActive("tab1")}
          style={{
            borderBottom: active === "tab1" && "2px solid green",
          }} className="font-Roboto shadow-md rounded-lg z-0 focus:outline-none px-2 py-2 cursor-pointer font-bold text-lg text-hover__color">
            Personal Information
          </button>
          <button onClick={() => setActive("tab2")}
          style={{
            borderBottom: active === "tab2" && "2px solid green",
          }} className="font-Roboto shadow-md rounded-lg z-0 focus:outline-none px-4 py-2 cursor-pointer font-bold text-lg text-hover__color">
            Profile Update
          </button>
        </div>

        {active === "tab1" ? <Personal__information details={details} /> : <Profile__Update />}
      </div>
    </div>
  );
};

export default Settings;
