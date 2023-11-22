import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector( (state) => state )
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) );
  }, [cart])

  return (
    <div className="w-[90%] h-screen mx-auto">
      {
        cart.length > 0 ?
        (
        <div className="flex w-full">
          <div className="flex flex-col w-[60%]">
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              } )
            }
          </div>

          <div className="w-[40%] pt-10 pb-10 flex flex-col justify-between">
            <div className="flex flex-col m-4">
              <div className="text-green-900 text-2xl font-semibold uppercase">Your Cart</div>
              <div className="text-green-700 text-5xl font-semibold uppercase mb-8">Summary</div>
              <p className="text-black-100 font-semibold text-xl">
                Total Items: <span className="text-gray-700 font-normal">{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col m-4 gap-5">
              <p className="text-black-100 font-semibold text-xl">Total Amount: <span className="text-gray-700">${totalAmount}</span></p>
              <button className="bg-green-700 text-white font-semibold text-2xl h-14 rounded-lg border-2 border-green-500
               hover:bg-white hover:text-green-700 transition duration-300 ease-in">
                Checkout Now
              </button>
            </div>
          </div>

        </div>
        ) :
        (<div className="flex flex-col items-center justify-center h-full -mt-8 gap-5">
          <h1 className="text-gray-700 text-xl font-semibold">Your cart is empty!</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white font-semibold text-xl h-12 rounded-lg border-2 border-green-600
               hover:bg-white hover:text-green-700 transition duration-300 ease-in pl-8 pr-8">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
};

export default Cart;
