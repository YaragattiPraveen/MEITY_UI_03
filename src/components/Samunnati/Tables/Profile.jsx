import React from "react";

const Profile = ({ heading }) => {
  return (
    <div className="bg-box__bg__color py-10 px-10 rounded-lg my-6">
      <h2 className="text-center uppercase text-xl font-Roboto font-semibold text-hover__color">
        {heading} Information
      </h2>
      <div className="max-w-[520px] mx-auto my-10">
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">ID</label>
          {
            heading === "FPO" ? <p>FPO - 1</p> : <p>Farmer - 1</p>
          }
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Name</label>
          {
            heading === "FPO" ? <p>FPO</p> : <p>Farmer</p>
          }
        </div>
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Phone</label>
          <p>8845769521</p>
        </div>

        {
          heading === "FPO" && <>
            <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">

              <label className="text-lg">Email</label>
              <p>fpo1@gmail.com</p>
            </div>
          </>
        }
        <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
          <label className="text-lg">Location</label>
          <p>Hyderabad</p>
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
