import { useContext } from "react";
import Sidebar from "../components/Farmer/Sidebar";
import { Outlet } from "react-router-dom";

import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import ChatIcon from '@mui/icons-material/Chat';
import PreviewIcon from '@mui/icons-material/Preview';
import { AppContext } from "../Context/context";

const ClusterWrapper = () => {
  const list = [
    {
      title: "View Profiles",
      icon: <AgricultureIcon style={{ color: "white", fontSize: "28px" }} />,
      to: "Profile",
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
      title: "Chat with FPO",
      icon: (
        <ChatIcon style={{color:"white", fontSize: "28px"}} />
      ),
      to: "chat-with-fpo"
    },
    {
      title: "Custom Hiring Center",
      icon: <PreviewIcon style={{color:"white", fontSize: "28px"}} />,
      to: "custom-hiring-center"
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

export default ClusterWrapper;
