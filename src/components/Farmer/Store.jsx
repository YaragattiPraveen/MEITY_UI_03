import Navbar from "./Navbar";
import Card from "./Card";
import { productItemsList } from "../Utils/Const";

const Store = () => {
  return (
    <>
      <div className="container w-full mx-auto">
        <Navbar />
        <h2 className="text-hover__color uppercase text-xl lg:text-2xl font-Roboto font-extrabold py-4 ">
          Shop from FPO
        </h2>
        <div className="mx-auto">
          <div className="flex flex-wrap font-Roboto text-black__color">
           {
            productItemsList?.map((item,i) => <Card key={i} item={item} />)
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
