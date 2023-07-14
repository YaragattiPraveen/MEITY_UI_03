import { useContext } from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";
import SpaIcon from "@mui/icons-material/Spa";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import InfoIcon from "@mui/icons-material/Info";
import CampaignIcon from "@mui/icons-material/Campaign";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import { AppContext } from "../Context/context";

const FarmerWrapper = () => {
  const list = [
    {
      title: "Dashboard",
      icon: <HomeRoundedIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "dashboard",
    },
    {
      title: "Store",
      icon: (
        <LocalGroceryStoreRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "store",
    },
    {
      title: "Selling Price",
      icon: (
        <MonetizationOnRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "sellingprice",
    },
    {
      title: "Loan",
      icon: (
        <CreditScoreRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "loan",
    },
    {
      title: "Input Requirement",
      icon: <SpaIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "input-requirement",
    },
    {
      title: "Purchase Authentication",
      icon: <FingerprintIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "purchase-authentication",
    },
    {
      title: "Transaction History",
      icon: (
        <AccountBalanceWalletRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "transaction-history",
    },
    {
      title: "Training Programs",
      icon: (
        <TerminalRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "training",
    },
    {
      title: "Crop Advisory",
      icon: (
        <DashboardCustomizeRoundedIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "crop-advisory",
    },
    {
      title: "FPO Details",
      icon: <InfoIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "fpo-details",
    },
    {
      title: "FPO Announcements",
      icon: <CampaignIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "fpo-announcements",
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
};

export default FarmerWrapper;
