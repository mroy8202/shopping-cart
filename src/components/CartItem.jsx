import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {remove} from '../redux/Slices/CartSlice';
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>
      
      <div className="flex justify-evenly p-10 border rounded-lg">

        <div className="h-[200px] w-[200px]">
          <img src={item.image} className="h-full max-w-[200px]" />
        </div>
        <div className="flex flex-col justify-between max-w-[60%]">
          <h1 className="text-gray-700 text-lg font-semibold ">{item.title}</h1>
          <h1 className="text-gray-600">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between h-10 items-center">
            <p className="text-green-600 font-bold text-lg">${item.price}</p>
            <div onClick={removeFromCart}
             className="flex justify-center items-center cursor-pointer h-full w-10 rounded-full
              bg-red-200 hover:bg-red-400 text-red-900 hover:text-white" >
              <RiDeleteBin6Line className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default CartItem;
