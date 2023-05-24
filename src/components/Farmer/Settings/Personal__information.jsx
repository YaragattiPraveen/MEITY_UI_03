import React from "react";

const Personal__information = ({ details }) => {
  return (
    <div>
      <div className="max-w-[520px] mx-auto my-10">
        {details?.map((item) => {
          return (
            <div className="flex items-center justify-between my-5 text-silver__color font-Roboto">
              <label className="text-lg">{item.label}</label>
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personal__information;
