import React from "react";

const Profile = () => {
  return (
    <div className="bg-box__bg__color py-10 px-10 rounded-lg my-6">
      <h2 className="text-center uppercase text-xl font-Roboto font-semibold text-hover__color">
        FPO Information
      </h2>
      <div className="max-w-[520px] mx-auto my-10">
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">ID</label>
          <p>F111111</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Name</label>
          <p>FPO-F111111-Name</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Phone</label>
          <p>FPO-F111111-Phone</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Email</label>
          <p>FPO-F111111-Email</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Location</label>
          <p>FPO-F111111-Location</p>
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Approved Loan Amount</label>
          <p>100000</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
