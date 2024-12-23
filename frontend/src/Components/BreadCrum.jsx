import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { AppContextConsumer } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const BreadCrum = () => {
  const { darkMode, URL } = AppContextConsumer();
  const params = useParams();
  const [singleProductArray, setSingleProductArray] = useState([]);

  const productId = params.productId;

  const getSingleProductDataFromApi = async () => {
    const res = await axios.get(`${URL}/product/getSingleProduct/${productId}`, { withCredentials: true });

    if (res.data.success) {
      setSingleProductArray([...res.data.singleProduct]);
    }
  }

  useEffect(() => {
    getSingleProductDataFromApi();
  }, [])


  return (
    <>
      <div className={`breadCrum_outer_container w-full h-20 flex justify-start items-center px-20 gap-3 text-xl  ${(darkMode) ? "bg-black text-white" : ""}`}>
        <NavLink to="/"><p className='text-red-600'>Home</p></NavLink>
        <FaChevronRight />
        <NavLink to="/"><p className='text-red-600'>Shop</p></NavLink>
        <FaChevronRight />
        <NavLink to={`/${singleProductArray[0]?.productCategory.toLowerCase()}`}><p className='text-red-600'>{singleProductArray[0]?.productCategory}</p></NavLink>
        <FaChevronRight className='max-md:hidden'/>
        <p className='text-xs max-md:hidden'>{singleProductArray[0]?.productTitle}</p>
      </div>
    </>
  )
}

export default BreadCrum
