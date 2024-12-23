import React, { useEffect, useState } from 'react'
import Items from './Items'
import { AppContextConsumer } from '../Context/ShopContext'
import { FaSpinner } from "react-icons/fa";
import axios from 'axios'

const NewCollection = () => {
  const { darkMode, URL } = AppContextConsumer();
  const [newCollectionArray, setNewCollectionArray] = useState([]);

  const getNewCollectionData = async () => {
    const res = await axios(`${URL}/product/getNewCollection`, { withCredentials: true });

    if (res.data.success) {
      setNewCollectionArray([...res.data.newCollection]);
    }


  }


  useEffect(() => {
    getNewCollectionData();
  }, [])

  return (
    <>
      {
        (!newCollectionArray.length > 0) ? <div className=' w-[95%] min-h-screen text-blue-600 text-5xl animate-spin flex justify-center items-center'><FaSpinner /></div> :
          <div className={`newCollection_outer_container pt-12 w-full min-h-screen flex justify-center items-start ${(darkMode) ? "bg-[#242424] text-white" : ""}`}>
            <div className="newCollection_inner_container container w-[90%] h-full flex flex-col items-center justify-start ">
              <h1 className='text-5xl font-semibold uppercase text-center max-sm:text-4xl'>New Collection</h1>
              <div className={`w-[30%] h-2 ${(darkMode) ? "bg-white" : "bg-black "} my-3 rounded-lg`}></div>

              <div className="w-full h-full grid grid-cols-3 max-md:grid-cols-2 gap-10 max-sm:gap-[2rem_0.75rem] my-12">
                {
                  newCollectionArray.map((currElem) => {
                    return (
                      <Items key={currElem._id} id={currElem._id} name={currElem.productTitle} image={currElem.productImg.secure_url} new_price={currElem.productNewPrice} old_price={currElem.productOldPrice} />
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

export default NewCollection