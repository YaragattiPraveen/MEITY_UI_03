import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container w-full mx-auto">
      <div className="mb-2 px-2 bg-box__bg__color shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-hover__color text-lg md:text-xl font-Roboto font-extrabold py-4">
          {title}
        </h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          transitionDuration={800}
          customTransition="all .5s"
          className="pb-7 z-10"
        >
          <div
            className="max-w-sm mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
       transform hover:scale-105 transition duration-500"
          >
            <img
              className="rounded-t-lg"
              src="https://plus.unsplash.com/premium_photo-1667546569341-1136d35ab1fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="py-5 px-2 flex justify-between items-center">
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  Market Price
                </p>
                <p className="text-white text-base font-Roboto">500</p>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  FPO Price
                </p>
                <p className="text-white text-base font-Roboto">450</p>
              </div>
            </div>
          </div>
          <div
            className="max-w-sm  mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
        transform hover:scale-105 transition duration-500"
          >
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1458014854819-1a40aa70211c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="py-5 px-2 flex justify-between items-center">
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  Market Price
                </p>
                <p className="text-white text-base font-Roboto">500</p>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  FPO Price
                </p>
                <p className="text-white text-base font-Roboto">450</p>
              </div>
            </div>
          </div>
          <div
            className="max-w-sm  mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
        transform hover:scale-105 transition duration-500"
          >
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="py-5 px-2 flex justify-between items-center">
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  Market Price
                </p>
                <p className="text-white text-base font-Roboto">500</p>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  FPO Price
                </p>
                <p className="text-white text-base font-Roboto">450</p>
              </div>
            </div>
          </div>
          <div
            className="max-w-sm  mx-2 bg-bg__color border border-gray-200 rounded-lg shadow
        transform hover:scale-105 transition duration-500"
          >
            <img
              className="rounded-t-lg"
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="py-5 px-2 flex justify-between items-center">
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  Market Price
                </p>
                <p className="text-white text-base font-Roboto">500</p>
              </div>
              <div className="flex flex-col">
                <p className="mb-1 text-base font-Roboto tracking-tight text-white">
                  FPO Price
                </p>
                <p className="text-white text-base font-Roboto">450</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
