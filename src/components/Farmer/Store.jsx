import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Store = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color text-2xl font-Roboto font-extrabold py-6 ">
          Shop from FPO
        </h2>
        <div className="flex justify-center items-center py-4">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
