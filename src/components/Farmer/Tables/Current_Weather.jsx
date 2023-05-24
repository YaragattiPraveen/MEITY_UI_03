import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";
import NightsStayIcon from "@mui/icons-material/NightsStay";
const Current_Weather = () => {
  return (
    <div className="bg-box__bg__color shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-hover__color text-xl font-Roboto font-extrabold py-5 ">
        Current Weather
      </h2>
      <div className="px-6 text-left">
        <div className="flex items-center pb-2">
          <div>
            <WbSunnyIcon style={{ color: "orange", fontSize: "50px" }} />
          </div>
          <div>
            <div className="pl-10 flex items-center">
              <p className="text-silver__color text-base font-medium font-Roboto">
                Today
              </p>
              <small className="pl-2 text-silver__color font-normal font-Roboto">
                | 19 May 2023
              </small>
            </div>
            <div className="pl-10 flex items-center">
              <p className="text-silver__color text-base font-medium font-Roboto">
                38°C
              </p>
              <small className="pl-2 text-silver__color font-Roboto">
                Sunny
              </small>
            </div>
          </div>
        </div>
        <small className="text-silver__color font-medium font-Roboto py-4">
          7 Days Weather
        </small>
        <div className="flex py-5 flex-wrap justify-between">
          <div className="flex items-center flex-col">
            <WbSunnyIcon style={{ color: "orange", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">37° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Mon</small>
          </div>
          <div className="flex items-center flex-col">
            <ThunderstormIcon style={{ color: "grey", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">33° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Tue</small>
          </div>
          <div className="flex items-center flex-col">
            <CloudIcon style={{ color: "lightblue", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">46° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Wed</small>
          </div>
          <div className="flex items-center flex-col">
            <WbSunnyIcon style={{ color: "orange", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">18° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Thu</small>
          </div>
          <div className="flex items-center flex-col">
            <NightsStayIcon style={{ color: "lightblue", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">28° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Fri</small>
          </div>
          <div className="flex items-center flex-col">
            <AirIcon style={{ color: "orangered", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">36° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Sat</small>
          </div>
          <div className="flex items-center flex-col">
            <ThunderstormIcon style={{ color: "grey", fontSize: "35px" }} />
            <small className="py-2 text-silver__color text-base font-medium font-Roboto">42° 28°</small>
            <small className=" text-silver__color text-base font-medium font-Roboto">Sun</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current_Weather;
