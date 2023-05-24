import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ list }) => {
  return (
    <div className="font-Roboto z-50 shadow-md bg-bg__color  w-[240px] h-screen">
      <div className="flex flex-col items-center">
        <img
          className="mx-auto pt-5"
          height={50}
          width={50}
          src={logo}
          alt="logo"
        />
        <h1 className="text-white__color text-2xl font-bold">MEITY</h1>
      </div>
      <div className="mx-auto w-[100%] my-5 ">
        {list?.map((item) => {
          return (
            <div className="flex items-center justify-start py-2.5 px-2 hover:bg-hover__color">
              <Link to={item.to} className="flex items-center justify-start">
                {item.icon}
                <p className="text-white__color pl-1 text-[17px]">
                  {item.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
