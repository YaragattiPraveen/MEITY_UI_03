import Card from "../../../Farmer/Card";
import { productItemsList } from "../../../Utils/Const";

const Procuring = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap font-Roboto text-black__color">
        {
          productItemsList?.map((item,i) => <Card key={i} item={item} />)
        }
      </div>
    </div>
  );
};

export default Procuring;
