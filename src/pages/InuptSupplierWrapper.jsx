import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { useContext } from "react";
import { AppContext } from "../Context/context";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

const InputSupplierWrapper = () => {
  const list = [

    {
      title: "Transactions with FPO",
      icon: (
        <CurrencyBitcoinIcon
          style={{ color: "white", fontSize: "28px" }}
        />
      ),
      to: "transactions-with-fpo"
    },
    {
      title: "Transaction With Federation",
      icon: (
        <RequestQuoteIcon style={{color: "White", fontSize: "28px"}}/>
      ),
      to: "transactions-with-federation"
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

export default InputSupplierWrapper