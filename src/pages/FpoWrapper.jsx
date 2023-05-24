import React from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AgricultureIcon from '@mui/icons-material/Agriculture';

const FpoWrapper = () => {
  const list = [
    {
      title: "Dashboard",
      icon: <HomeRoundedIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "dashboard",
    },
    {
        title: "Farmer",
        icon: (
          <AgricultureIcon
            style={{ color: "white", fontSize: "28px" }}
          />
        ),
        to: "farmer",
      },
    {
      title: "FPO Store",
      icon: (
        <LocalGroceryStoreRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "fpo-store",
    },
    {
        title: "Lac Procurement",
        icon: (
          <DashboardCustomizeRoundedIcon
            style={{ color: "white", fontSize: "28px" }}
          />
        ),
        to: "lac-procurement",
      },
    {
      title: "Farmer Loan",
      icon: (
        <MonetizationOnRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "farmer-loan",
    },
    {
      title: "FPO Loan",
      icon: (
        <CreditScoreRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "fpo-loan",
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
  return (
    <>
      <div className="flex container relative">
        <div className="w-[20%] mx-auto h-full fixed">
          <Sidebar list={list} />
        </div>
        <div className="w-[85%] ml-[260px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FpoWrapper;
