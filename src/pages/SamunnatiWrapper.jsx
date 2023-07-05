import React, { useContext } from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { AppContext } from "../Context/context";

const SamunnatiWrapper = () => {
  const list = [
    {
      title: "FPO Loan",
      icon: (
        <MonetizationOnRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "fpo-loan",
    },
    {
      title: "FPO Info",
      icon: (
        <CreditScoreRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "fpo-info",
    },
    {
      title: "Farmer Loan",
      icon: <AgricultureIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "farmer-loan",
    },
    {
      title: "Support",
      icon: (
        <SupportAgentRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "support",
    },
    {
      title: "Settings",
      icon: (
        <SettingsSuggestRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "settings",
    },
  ];
  const { toggleNav, setToggleNav } = useContext(AppContext);
  return (
    <>
      <div className="flex container lg:px-0 px-3">
        <div
          className={`w-auto h-full fixed transition-all duration-700 ease-in-out lg:ml-0 lg:z-10 ${
            toggleNav ? "z-30 -ml-3" : "-z-30 -ml-[300px]"
          }`}
        >
          <Sidebar list={list} />
        </div>
        <div className="w-full lg:w-full mx-auto ml-0 lg:ml-[260px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SamunnatiWrapper;
