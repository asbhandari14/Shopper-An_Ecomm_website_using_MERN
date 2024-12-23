import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContextConsumer } from '../Context/ShopContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = () => {
    const param = useParams();
    const productId = param.productId;
    const [singleProductArray, setSingleProductArray] = useState([]);
    const [size, setSize] = useState("");
    const {cartItem, darkMode, URL} = AppContextConsumer();
    const notify = () => toast.error("Please select your product size");

    const getSingleProductDataFromApi=async()=>{
        const res = await axios.get(`${URL}/product/getSingleProduct/${productId}`, {withCredentials: true});
        
        if(res.data.success){
            setSingleProductArray([...res.data.singleProduct]);
        }
    }

    useEffect(()=>{
        getSingleProductDataFromApi();
    }, [])


    return (
        <>
            <div className={`productDisplay_outer_container w-full h-auto flex  justify-center items-start py-6 ${(darkMode)?"bg-black text-white":""}`}>
                <div className="productDisplay_inner_container container w-[90%] h-full grid grid-cols-[1fr_2fr] max-xl:grid-cols-1 gap-12">
                    <div className={`productDisplay_Right w-full h-full flex max-xl:justify-center ${(darkMode)?"":"border-1 border-zinc-200"}  shadow-md`}>
                        <img src={singleProductArray[0]?.productImg?.secure_url} alt="" className='w-full h-auto max-xl:w-[20rem] max-md:w-[15rem] max-sm:w-[10rem]' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-4 px-6'>
                        <h1 className='text-4xl font-semibold max-md:text-3xl max-sm:text-3xl max-xl:text-center'>{singleProductArray[0]?.productTitle}</h1>
                        <div className="productPrice flex gap-4 text-xl font-semibold">
                            <p>₹1199</p>
                            <p className='text-red-600 line-through'>₹1499</p>
                        </div>
                        <p className='max-xl:text-center'>{singleProductArray[0]?.productDescription}</p>

                        <div className="productSize w-full flex flex-col max-xl:items-center gap-3 mt-4">
                            <h1 className='text-4xl font-semibold'>Select Size</h1>
                            <div className="productSizeBoxes flex justify-start  gap-3">
                                {
                                    singleProductArray[0]?.productSize.map((currSize, index)=>{
                                        return(
                                            (currSize!="")?<button key={index} className={`w-12 h-12 border-1 border-black rounded-md ${(size == currSize)?"bg-red-600 text-white":""}`} name={currSize} onClick={(e)=>{setSize(e.target.name)}}>{currSize}</button>:""
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="cartButton w-full flex max-xl:justify-center">
                            <button className='py-3 px-8 bg-red-600 text-white rounded-xl'  onClick={()=>{window.scrollTo(0, 0); if(size==""){notify()} else{cartItem(...singleProductArray, size)}}}>Add to Cart</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Product
