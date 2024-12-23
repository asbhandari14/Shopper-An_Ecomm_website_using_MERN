import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBoxArchive } from "react-icons/fa6";
import { AppContextConsumer } from '../Context/ShopContext';






const MyOrder = () => {
    const { URL, darkMode } = AppContextConsumer();
    const [order, setOrder ] = useState([]);
    // const [orderInfo, setOrderInfo] = useState({});

    const getUserAllOrders = async () => {
        try {
            console.log("hello muy order")
            const response = await axios.get(`${URL}/order/specifcUserOrders`, { withCredentials: true });

            if (response.data.success) {
                console.log(response);
                setOrder([...response.data.userAllOrder]);
            }
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
        getUserAllOrders();
    }, [])

    if(order.length<1){
        return (
            <div className='w-full min-h-[70vh] flex justify-center items-center'>
            <h1 className='text-3xl font-semibold'>No Order Placed Yet</h1>
            </div>
        )
    }

    return (
        <>
            {/* {console.log(orderInfo)} */}
            <div className={`myOrder_page w-full flex justify-center items-center py-8 px-12 ${(darkMode)?"bg-[#242424] text-white":""}`}>
                <div className="myOrder_page_inner w-[95%] flex flex-col justify-start items-start gap-6">
                    <h1 className='text-2xl font-semibold'>My Order</h1>
                    {
                        order && order?.map((currElem) => {
                            return (
                                <div className={`w-full border border-gray-300 shadow-md rounded-md grid grid-cols-[1fr_4fr_3fr_2fr_1fr] gap-4 py-8 px-6 text-xs text-zinc-600 ${(darkMode)?"text-white":""}`}>
                                    <div className='w-full h-full'><FaBoxArchive className='text-2xl' /></div>
                                    <div className='w-full flex flex-col gap-3'>
                                        <div>
                                            {
                                                currElem && currElem?.orderedProduct.map((currElem)=>{
                                                    return(
                                                        <li>{currElem?.productTitle}</li>
                                                    )
                                                })
                                            }
                                        </div>

                                        <h3 className='text-sm font-semibold'>{currElem?.userInfo?.username}</h3>

                                        <div>
                                            <p className='grid grid-cols-[2fr_1fr] justify-items-start items-center'>Order Id : <span>{currElem?._id}</span></p>
                                            <p className='grid grid-cols-[2fr_1fr] justify-items-start items-center'>Email : <span>{currElem?.userInfo?.email}</span></p>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <p>Item : {currElem?.orderedProduct?.length}</p>
                                        <div>
                                            <p> Method : {currElem?.orderedMethod}</p>
                                            <p> Payment : {currElem?.payment}</p>
                                            <p> Date : {currElem?.orderDate.slice(0, 10)?.split("-")?.reverse()?.join("/")}</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col'>{currElem?.totalAmount}</div>
                                    <div className='w-full flex flex-col'>{currElem?.orderStatus}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MyOrder
