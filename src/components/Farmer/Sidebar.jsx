import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/context";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

const Sidebar = ({ list }) => {
  const {toggleNav,setToggleNav} = useContext(AppContext)
  return (
    <div className={`font-Roboto relative transition-all duration-700 ease-in-out shadow-md bg-bg__color w-[180px] lg:w-[240px] overflow-y-auto h-full`}>
      <div className="flex flex-col items-center">
        <img
          className="mx-auto pt-12 lg:pt-5"
          height={50}
          width={50}
          src={logo}
          alt="logo"
        />
        <h1 className="text-white__color text-2xl font-bold">MEITY</h1>
        {toggleNav && <div className="absolute top-2 right-3" onClick={()=>setToggleNav(false)}><CancelSharpIcon style={{ fontSize: "30" }} className="text-white cursor-pointer"/></div>}
      </div>
      <div className="mx-auto w-[100%] my-5 ">
        {list?.map((item,ind) => {
          return (
            <div key={ind} className="flex items-center justify-start py-2.5 px-2 hover:bg-hover__color">
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
