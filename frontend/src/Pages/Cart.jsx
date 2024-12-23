import React, { useState } from 'react'
import { AppContextConsumer } from '../Context/ShopContext'
import { IoClose } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { LuLoader2 } from "react-icons/lu";



const Cart = () => {
  const { cartArray, removeCartItem, darkMode, tokenValue, getTotalCartItems } = AppContextConsumer();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  const orderNow = async () => {
    try {
      if (!tokenValue) {
        const notify = () => toast.error("You Need to Logged In First");
        notify();
      }
      else {
        setLoading(true);
        const response = await axios.post("http://localhost:8000/order/orderPlaced", { orderedProduct: cartArray, totalAmount: getTotalCartItems() }, { withCredentials: true, headers: { "Content-Type": "application/json" } });

        if (response.data.success) {
          console.log(response);
          const notify = () => toast.success(response.data.mssg);
          notify();
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      const notify = () => toast.error(error.response.data.mssg);
      notify();
      setLoading(false);
    }
    finally {
      setLoading(false);
    }
  }


  return (
    <>
      <div className={`cart_outer_container w-full h-auto py-12 flex flex-col justify-start items-center ${(darkMode) ? "bg-[#242424] text-white" : ""}`}>
        <div className="cart_inner_container container w-[90%] h-full grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] justify-items-center max-md:hidden mt-12 max-md:mt-0 mx-auto text-xl font-semibold">
          <h3 className='ml-3 max-md:ml-0 max-md:my-3'>Product</h3>
          <h3 className='ml-20 max-md:ml-0 max-md:my-3'>Title</h3>
          <h3 className='ml-5 max-md:ml-0 max-md:my-3'>Size</h3>
          <h3 className='max-md:my-3'>Price</h3>
          <h3 className='max-md:my-3'>Quantity</h3>
          <h3 className='max-md:my-3'>Total</h3>
          <h3 className='max-md:my-3'>Remove</h3>
        </div>
        <div className=' w-[88%] h-1 bg-zinc-300 mx-auto mt-3'></div>
        {
          cartArray?.map((currElem) => {
            return (
              <>
                <div key={currElem._id} className="cart_inner_container container w-[90%] max-md:w-[60%] max-sm:w-[90%] h-full grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] max-md:grid-cols-1 justify-items-center items-center max-md:gap-4 max-md:text-lg max-sm:text-base max-sm:text-center mt-6 mx-auto font-semibold text-xs">
                  <img src={currElem.productImg.secure_url} className="w-10 max-md:w-[10rem] max-sm:w-[8rem] ml-5" alt="" />
                  <h3 >{currElem.productTitle}</h3>
                  <h3 className='ml-8 max-md:ml-0 max-md:text-center'>{currElem.size}</h3>
                  <h3 className='ml-3 max-md:ml-0 max-md:text-center'>{currElem.productNewPrice}</h3>
                  <h3 className='ml-8 max-md:ml-0 max-md:text-center'>1</h3>
                  <h3 className='ml-3 max-md:ml-0 max-md:text-center'>{currElem.productNewPrice}</h3>
                  <h3 className='ml-6 max-md:ml-0 max-md:text-center text-xl cursor-pointer' onClick={() => { removeCartItem(currElem._id.toString()) }}><IoClose /></h3>
                </div>
                <div className=' w-[88%] h-1 bg-zinc-300 mx-auto mt-6'></div>
              </>

            )
          })
        }
        <div className="cart_total_container w-full h-full flex flex-col justify-start items-center">
          <h1 className='text-xl my-12'>Cart Totals</h1>
          <div className="cart_subtotal w-[60%] mx-auto flex justify-between items-center text-xl">
            <p>Subtotal</p>
            <p>{getTotalCartItems()}</p>
          </div>
          <div className='mb-12 w-[60%] h-1 bg-zinc-300 mx-auto my-3'></div>
          <div className="cart_subtotal w-[60%] mx-auto flex justify-between items-center text-xl">
            <p>Shipping Free</p>
            <p>Free</p>
          </div>
          <div className='mb-12 w-[60%] h-1 bg-zinc-300 mx-auto my-3'></div>
          <div className="cart_subtotal w-[60%] mx-auto flex justify-between items-center text-xl">
            <p>Total</p>
            <p>{getTotalCartItems()}</p>
          </div>
          <button className='py-3 px-12 border-1 border-black rounded-lg text-xl uppercase my-8 bg-red-600 text-white flex justify-center items-center gap-3' onClick={orderNow}>Order Now  <LuLoader2 className={`${(loading)?"animate-spin":"hidden"}`}/> </button>

        </div>
      </div>
    </>
  )
}

export default Cart
