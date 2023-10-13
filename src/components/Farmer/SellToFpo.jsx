import Card from './Card'
import { productItemsList } from '../Utils/Const'
const SellToFpo = () => {

  return (
    <div>
      <div className="mx-auto">
        <div className="flex flex-wrap font-Roboto text-black__color">
          {
            productItemsList?.map((item, ind) => {
              return (<Card key={ind + 1 } item={item} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SellToFpo