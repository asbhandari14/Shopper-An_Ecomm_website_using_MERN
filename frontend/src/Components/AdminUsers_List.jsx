import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AppContextConsumer } from '../Context/ShopContext';



const AdminUsers_List=()=>{

    const [userArray, setUserArray] = useState([]);
    const {URL, darkMode} = AppContextConsumer();

    let i=1;

    const getUserList=async()=>{
        try {
            const response = await axios.get(`${URL}/auth/allData`, {withCredentials: true});
            console.log(response)

            if(response.data.success){
                setUserArray([...response.data.allData]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserList();
    }, [])

    return(
        <>
          <div className={`productList_container min-h-screen ${(darkMode)?"bg-black":"bg-white"} w-full flex flex-col items-center justify-start gap-3 py-8 `}>
        <h1 className={`text-3xl font-semibold mb-6 ${(darkMode)?" text-white":" text-black"}`}>All Users</h1>
        {/* <div className={`w-[30%] ${(darkMode)?"bg-white text-white":"bg-black text-black"} h-2 rounded-full mb-12`}/> */}
          {
            userArray && userArray?.map((currElem)=>{
              return(
                <div key={currElem._id} className='w-[90%] mx-auto grid grid-cols-[1fr_4fr_4fr_2fr] justify-items-start items-center p-2 bg-[#f3f3f6] rounded-md text-lg gap-8'>
                  <p className='w-full'>{i++}.</p>
                  <p className={`w-full text-start ${currElem.productStock < 50?"text-red-600":""}`}>{currElem.email}</p>
                  <p className='w-fu flex justify-center items-center gap-4'>{currElem.username}</p> 
                  <p className='w-fu flex justify-center items-center gap-4'>{currElem._id}</p> 
                </div>
              )
            })
          }
      </div>
        </>
    )
}


export default AdminUsers_List