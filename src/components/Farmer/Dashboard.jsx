import Navbar from "./Navbar";
import Slider from "./Slider";
import Crop_Advisory from "./Tables/Crop_Advisory";
import Loan_Updates from "./Tables/Loan_Updates";
import Current_Weather from "./Tables/Current_Weather";
const Dashboard = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
          Dashboard
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-6 py-2">
          <div className="text-green-500 lg:pr-4 pb-5 text-xs sm:text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Slider title={"Store"} />
          </div>
          <div className="text-green-500 lg:pr-4 pb-5 text-xs sm:text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Slider title={"Custom Hiring Center"} />
          </div>
          <div className="text-green-500 lg:pr-4 pb-5 text-lg font-bold text-center rounded-lg col-span-4 md:col-span-2 row-span-3">
            <Crop_Advisory />
          </div>
          <div className="text-green-500 lg:pr-4 pb-4 text-lg font-bold text-center rounded-lg col-span-4 row-span-3">
            <Current_Weather />
          </div>
          <div className="text-green-500 lg:pr-4 pb-5 text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Slider title={"Selling Price"} />
          </div>
          <div className="text-green-500 lg:pr-4 pb-5 text-lg font-bold text-center rounded-lg col-span-3 row-span-3">
            <Loan_Updates />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
