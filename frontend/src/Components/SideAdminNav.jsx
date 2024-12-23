import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";




const SideAdminNav = () => {
    return (
        <>
            <div className="side_admin_nav_container w-full bg-[#f2f6ff] h-auto min-h-screen flex flex-col items-center justify-start gap-3 pt-8">
                <div className='w-full flex justify-between items-center bg-[#d3e3fd] p-3 border-r-2 border-blue-600'><IoCart className='text-3xl text-black' /> <span className=' font-semibold cursor-pointer'>Add Product</span></div>
                <div className='w-full flex justify-between items-center p-3  bg-[#d3e3fd] border-r-2 border-blue-600'><FaClipboardList className='text-3xl text-black' /> <span className='text-lg font-semibold cursor-pointer'>Product List</span></div>
            </div>
        </>
    )
}

export default SideAdminNav
