import Card from "../../../Farmer/Card";
import { productItemsList } from "../../../Utils/Const";
const List_of_Out_of_Stocks = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap font-Roboto text-black__color"> 
       {
        productItemsList?.map((item,i) => <Card key={i} item={item}/>)
       }
      </div>
    </div>
  );
};

export default List_of_Out_of_Stocks;
