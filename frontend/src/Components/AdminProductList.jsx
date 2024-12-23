import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AppContextConsumer } from '../Context/ShopContext';

const ProductListAdmin = () => {
    const [productListArray, setProductListArray] = useState([]);
    const {URL, darkMode} = AppContextConsumer();

    let i=1;

    const getTheProductListData=async()=>{
        try {
            const response = await axios.get(`${URL}/product/getAllProduct`, {withCredentials: true});

            if(response.data.success){
              console.log(response);
                setProductListArray([...response.data.allProduct]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getTheProductListData();
    }, [])
  return (
    <>
      <div className={`productList_container ${(darkMode)?"bg-black":"bg-white"} w-full flex flex-col items-center justify-start gap-3 mb-12 py-3`}>
        <h1 className={`text-5xl ${(darkMode)?" text-white":" text-black"}`}>Analyze the Product</h1>
        <div className={`w-[30%] ${(darkMode)?"bg-white text-white":"bg-black text-black"} h-2 rounded-full mb-12`}/>
          {
            productListArray.map((currElem)=>{
              return(
                <div key={currElem._id} className='w-[90%] mx-auto flex justify-between items-center p-2 bg-[#f3f3f6] rounded-md text-lg gap-8'>
                  <p >{i++}.</p>
                  <p className={`w-full text-start ${currElem.productStock < 50?"text-red-600":""}`}>{currElem.productTitle}</p>
                  {/* <p className='flex justify-center items-center gap-4'>{currElem.productStock} <button className='py-2.5 px-4 bg-green-600 text-white rounded-xl text-xl'>Analyze</button></p>  */}
                </div>
              )
            })
          }
      </div>
    </>
  )
}

export default ProductListAdmin
