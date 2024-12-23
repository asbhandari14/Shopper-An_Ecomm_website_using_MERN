import React, { useEffect, useState } from 'react'
import Items from './Items'
import { AppContextConsumer } from '../Context/ShopContext'
import { FaSpinner } from "react-icons/fa";



const Popular = () => {
  const {darkMode, getTheProductArray} = AppContextConsumer();
  const [womenProductArray, setWomenProductArray] = useState([]);


  const getThePopularInWomenData=async()=>{
    const res = await getTheProductArray();

    console.log(res);
    if(res.data.success){
      setWomenProductArray([...res.data.allProduct]);
    }

  }


  

  useEffect(()=>{
    getThePopularInWomenData();
  }, [])

  return (
    <>
      {
        (!womenProductArray.length>0)?<div className=' w-[95%] min-h-screen text-blue-600 text-5xl animate-spin flex justify-center items-center'><FaSpinner /></div> : 
        <div className={`popular_outer_container pt-12 w-full min-h-screen flex justify-center items-start ${(darkMode)?"bg-[#242424] text-white":""}`}>
        <div className="popular_inner_container container w-[90%] h-full flex flex-col items-center justify-start ">
            <h1 className='text-5xl font-semibold uppercase text-center max-sm:text-4xl'>Popular In Women</h1>
            <div className={`w-[30%] h-2 ${(darkMode)?"bg-white":"bg-[#242424]"} my-3 rounded-lg`}></div>
            <div className="w-full h-full grid grid-cols-3 max-md:grid-cols-2 justify-center items-center gap-10 max-md:gap-[2rem_0.75rem] my-12">
                {
                  womenProductArray?.map((currElem)=>{
                      if(currElem.productCategory == "Women")
                        return(
                              (currElem.productStock<120)?  <Items key={currElem._id} id={currElem._id} name={currElem.productTitle} image={currElem.productImg.secure_url} new_price={currElem.productNewPrice} old_price={currElem.productOldPrice}  />: ""
  
                        )
                    })
                }
            </div>
        </div>
      </div>
      }
    </>
  )
}

export default Popular