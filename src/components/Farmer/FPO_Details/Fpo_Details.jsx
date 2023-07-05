import React from "react";
import Navbar from "../Navbar";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Personal__information from "../Settings/Personal__information";

const Fpo_Details = () => {
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
      <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-6 ">
        FPO Details
      </h2>

      <div className="bg-box__bg__color px-5 py-10 md:py-10 md:px-10 rounded-lg mb-6">
        <div className="flex items-center justify-center">
          <PermContactCalendarIcon
            style={{ color: "white", fontSize: "65px" }}
            className="bg-bg__color rounded-xl"
          />
        </div>
        <Personal__information details={details} />
      </div>
    </div>
  );
};

export default Fpo_Details;
