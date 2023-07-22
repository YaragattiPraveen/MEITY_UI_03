import Navbar from "./Navbar";
import Card from "./Card";

const Store = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
          Shop from FPO
        </h2>
        <div className="mx-auto">
          <div className="flex flex-wrap font-Roboto text-black__color">            <Card />
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
