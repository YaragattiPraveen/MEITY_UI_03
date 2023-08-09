import Card from "../../../Farmer/Card";
import { productItemsList } from "../../../Utils/Const";

const List_Of_Available_items = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-wrap font-Roboto text-black__color">         
          {
            productItemsList?.map((item,i) => <Card item={item} />)
          }
        </div>
      </div>
    </>
  );
};

export default List_Of_Available_items;
