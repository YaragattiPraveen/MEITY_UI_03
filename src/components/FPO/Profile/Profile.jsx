import React, { useState } from "react";
import Personal__information from "../../Farmer/Settings/Personal__information";
import Navbar from "../../Farmer/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Update_Profile from "./Update_Profile";

const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState(false);

  const profileUpdate = [
    {
      label: "FPO Name",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Date of Incorporation",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Number of farmers",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Address",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Size of Land Owned (in Acres)",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Land in Cultivation (in Acres)",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Mobile Number",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Email",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "PAN Number",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Seeds License Number",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Bank Name",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Bank Account Number",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "IFSC Code",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
    {
      label: "Directors Details",
      value: (
        <input
          type="text"
          name="fName"
          id="fName"
          placeholder=""
          className="w-1/2 py-3 px-3 shadow-sm bg-gray-50 border outline-hover__color border-gray-300 text-silver__color text-sm rounded-lg"
        />
      ),
    },
  ];

  const details = [
    { label: "FPO Name", value: "Sri Rama FPO" },
    { label: "Date of Incorporation", value: "18-04-1996" },
    { label: "Number of farmers", value: "1905" },
    { label: "Address", value: "9-31/3,blah,blah,blah" },
    { label: "Size of Land Owned (in Acres)", value: "10" },
    { label: "Land in Cultivation (in Acres)", value: "9" },
    { label: "Mobile Number", value: "94900XXXXX" },
    { label: "Email", value: "ramafpo@gmail.com" },
    { label: "PAN Number", value: "XXXXXXXXXX" },
    { label: "Seeds License Number", value: "ap128736/323/d22" },
    { label: "Bank Name", value: "SBI" },
    { label: "Bank Account Number", value: "XXXXXXXXXXXX" },
    { label: "IFSC Code", value: "XXXXXXXXXXXX" },
    { label: "Directors Details", value: "Mr.Ravi, 9090909090" },
  ];

  return (
    <div className="container w-full mx-auto">
      <Navbar />
      <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
        Profile
      </h2>

      <div className="bg-box__bg__color py-10 px-10 rounded-lg mb-6">
        <div className="flex items-center justify-center">
          <AccountCircleIcon
            style={{ color: "white", fontSize: "65px" }}
            className="bg-bg__color rounded-xl"
          />
        </div>
        {updateProfile ? (
          <Update_Profile
            profileUpdate={profileUpdate}
            setUpdateProfile={setUpdateProfile}
          />
        ) : (
          <Personal__information
            details={details}
            setUpdateProfile={setUpdateProfile}
            btn={"Update"}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
