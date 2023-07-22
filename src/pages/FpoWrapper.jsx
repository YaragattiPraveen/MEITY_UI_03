import { useContext } from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import CampaignIcon from "@mui/icons-material/Campaign";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { AppContext } from "../Context/context";

const FpoWrapper = () => {
  const list = [
    {
      title: "Dashboard",
      icon: <HomeRoundedIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "dashboard",
    },
    {
      title: "Farmer",
      icon: <AgricultureIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "farmer",
    },
    {
      title: "Place a Requirement",
      icon: (
        <PublishedWithChangesIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "requirement-acceptance",
    },
    {
      title: "Requirement Gathering",
      icon: (
        <PlaylistAddCheckCircleIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "requirement-gathering",
    },
    {
      title: "Announcement for Farmer",
      icon: <CampaignIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "announcement-for-farmer",
    },
    {
      title: "Request Quote",
      icon: <RequestQuoteIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "request-quote",
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
      title: "Invite Bid",
      icon: (
        <CurrencyBitcoinIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "Invite-bids"
    },
    {
      title: "FPO Loan",
      icon: (
        <CreditScoreRoundedIcon style={{ color: "white", fontSize: "28px" }} />
      ),
      to: "fpo-loan",
    },
    {
      title: "Corporate Customer",
      icon: (
        <CorporateFareIcon style={{ color: 'white', fontSize: "28px" }} />
      ),
      to: "corporate-customer"
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
    {
      title: "Profile",
      icon: <AccountCircleIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "profile",
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

export default FpoWrapper;
