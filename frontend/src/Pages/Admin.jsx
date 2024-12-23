import React, { useEffect, useState } from 'react';
import { IoCart } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import AdminAddProduct from '../Components/AdminAddProduct';
import AdminProductList from '../Components/AdminProductList';
import AdminOrderList from "../Components/AdminOrderList";
import AdminUsers_List from '../Components/AdminUsers_List';
import { AppContextConsumer } from '../Context/ShopContext';
import { FaUsers } from "react-icons/fa";
import { BsFillBox2Fill } from "react-icons/bs";



const Admin = () => {
    const [route, setRoute] = useState("addProduct");
    const {darkMode, userInfo} = AppContextConsumer();
    console.log(userInfo)

    useEffect(()=>{
        if(userInfo){
            console.log(userInfo)
        }
    }, [userInfo])
    return (
        <>
            <div className="w-full min-h-screen grid grid-cols-[2fr_8fr]">
            <div className={`side_admin_nav_container w-full  ${(darkMode)?"bg-black text-white":"bg-[#f4f5f7]"} h-auto min-h-screen flex flex-col items-center justify-start gap-2 pt-8 px-3`}>
                <div onClick={()=>{setRoute("addProduct")}} className={`w-full flex justify-start items-center gap-3 ${(route == "addProduct"?"bg-white text-black":"")} py-2 px-3 rounded-md`}><IoCart className='text-2xl' /> <span className=' text-lg font-semibold cursor-pointer'>Add Product</span></div>
                <div onClick={()=>{setRoute("productList")}} className={`w-full flex justify-start items-center gap-3 ${(route == "productList"?"bg-white text-black":"")} py-2 px-3 rounded-md`}><FaClipboardList className='text-2xl' /> <span className='text-lg font-semibold cursor-pointer'>Product List</span></div>
                <div onClick={()=>{setRoute("users")}} className={`w-full flex justify-start items-center gap-3 ${(route == "users"?"bg-white text-black":"")} py-2 px-3 rounded-md`}><FaUsers className='text-2xl' /> <span className=' text-lg font-semibold cursor-pointer'>Users</span></div>
                <div onClick={()=>{setRoute("orders")}} className={`w-full flex justify-start items-center gap-3 ${(route == "orders"?"bg-white text-black":"")} py-2 px-3 rounded-md`}><BsFillBox2Fill className='text-xl' /> <span className='text-lg font-semibold cursor-pointer'>Orders List</span></div>
            </div> 
            <div>
                {  
                    (()=>{
                        if(route === "addProduct"){
                            return <AdminAddProduct />
                        }
                        else if(route == "productList"){
                            return <AdminProductList />
                        }
                        else if(route == "users"){
                            return <AdminUsers_List />
                        }
                        else if(route == "orders"){
                            return <AdminOrderList />
                        }
                    })()
                }
            </div>
  
            </div>

        </>
    )
}

export default Admin
