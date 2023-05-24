import React from "react";

const Profile_Information = () => {
  return (
    <div className="bg-box__bg__color py-10 px-10 rounded-lg my-6">
      <h2 className="text-center uppercase text-xl font-Roboto font-semibold text-hover__color">
        Farmer Information
      </h2>
      <div className="max-w-[520px] mx-auto my-10">
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Name</label>
          <p>Vivek</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Mobile Number</label>
          <p>9XXXXXXXXX</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Date of Birth</label>
          <p>18-06-1994</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Gender</label>
          <p>Male</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Address</label>
          <p>9-31/3,blah,blah,blah</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Aadhaar Number</label>
          <p>XXXX-XXXX-XXXX</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">PAN Number</label>
          <p>XXXXXXXXXX</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Bank Name</label>
          <p>SBI</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Bank Account Number</label>
          <p>XXXXXXXXXX</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">IFSC Code</label>
          <p>XXXXXXXXXX</p>
        </div>
      </div>
    </div>
  );
};

export default Profile_Information;
