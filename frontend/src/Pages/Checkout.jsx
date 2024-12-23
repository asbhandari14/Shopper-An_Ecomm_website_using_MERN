import React, { useContext, useState } from 'react'
import { AppContextConsumer } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom';


const RAZOR_PAY_KEY = import.meta.env.VITE_RAZOR_PAY_KEY;
const RAZOR_PAY_KEY_SECRET = import.meta.env.VITE_RAZOR_PAY_KEY_SECRET;





const Checkout = () => {

    const { darkMode, getTotalCartItems, findCartLength } = AppContextConsumer();

    const [formFields, setformFields] = useState({
        name: '',
        pincode: '',
        address: '',
        phoneNumber: ''
    })

    const navigate = useNavigate();


    const placeOrder = () => {


        if (formFields.name === "" || formFields.address === "" || formFields.pincode === "" || formFields.phoneNumber === "") {
            alert("All fields Required");
            return false;
        }



        const addressInfo = {
            name: formFields.name,
            phoneNumber: formFields.phoneNumber,
            address: formFields.address,
            pincode: formFields.pincode,
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }



        var options = {
            key: RAZOR_PAY_KEY,
            key_secret: RAZOR_PAY_KEY_SECRET,
            amount: parseInt(getTotalCartItems() * 100),
            currency: "INR",
            order_receipt: 'order_rcptid_' + formFields.name,
            name: "E-Bharat",
            description: "for testing purpose",
            handler: function (response) {


                const paymentId = response.razorpay_payment_id
                // store in firebase 
                const orderInfo = {
                    cartItems: findCartLength(),
                    addressInfo: formFields.address,
                    date: new Date().toLocaleString(
                        "en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }
                    ),
                    email: "abc@123gmail.com",
                    userid: 12343,
                    paymentId
                }


                navigate('/')
            },

            theme: {
                color: "#3399cc"
            }
        };


        var pay = new window.Razorpay(options);
        pay.open();
    }


    const changeInput = (e) => {
        const { name, value } = e.target;

        setformFields(() => ({
            ...formFields,
            [name]: value
        }))
    }



    return (
        <>
            <div className={`checkout_container grid grid-cols-[2fr_1.5fr] max-md:grid-cols-1 max-w-7xl min-h-[86vh] mx-auto ${(darkMode) ? " bg-[#242424]" : "bg-white"}`}>
                <div className=' w-full h-full flex justify-center items-center gap-8'>
                    <div className={`shoppingAddress_box w-[75%] max-md:w-[95%] flex flex-col p-10 ${(darkMode) ? " bg-[#888181]" : "bg-[#f9f2f2]"} gap-3`}>
                        <h2 className='text-2xl font-semibold mb-3'>Shopping Address</h2>

                        <input type="text" placeholder='Enter your Full Name' name='name' onChange={changeInput} value={formFields.name} className={`py-2 px-3 border-1 border-zinc-600 rounded-md outline-none ${(darkMode) ? " bg-[#fbf7f7] text-black" : "bg-white"}`} />

                        <input type="number" placeholder='Enter Pincode' name='pincode' onChange={changeInput} value={formFields.pincode} className={`py-2 px-3 border-1 border-zinc-600 rounded-md outline-none ${(darkMode) ? " bg-[#fbf7f7] text-black" : "bg-white"}`} />

                        <input type="number" placeholder='Enter Phone Number' name="phoneNumber" onChange={changeInput} value={formFields.phoneNumber} className={`py-2 px-3 border-1 border-zinc-600 rounded-md outline-none ${(darkMode) ? " bg-[#fbf7f7] text-black" : "bg-white"}`} />

                        <textarea name='address' onChange={changeInput} value={formFields.address} className={`py-2 px-3 border-1 border-zinc-600 rounded-md outline-none ${(darkMode) ? " bg-[#fbf7f7] text-black" : "bg-white"}`} placeholder='Enter your Full Address'></textarea>
                    </div>
                </div>
                <div className='w-full h-full flex justify-start max-md:justify-center items-center mx-auto px-8'>
                    <div className={`subtotal_box w-[90%] max-md:w-[75%] flex flex-col py-10 px-4 gap-3  ${(darkMode) ? " bg-[#888181]" : "bg-[#f9f2f2]"}`}>
                        <div className='w-full flex justify-between'>
                            <h3>Subtotal</h3>
                            <p>{getTotalCartItems()}</p>
                        </div>
                        <div className='w-full flex justify-between'>
                            <h3>Shipping</h3>
                            <p>Free</p>
                        </div>
                        <div className='w-full flex justify-between'>
                            <h3>Total</h3>
                            <p>{getTotalCartItems()}</p>
                        </div>
                        <button onClick={placeOrder} className='mt-3 w-full bg-green-600 text-white py-2.5'>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
