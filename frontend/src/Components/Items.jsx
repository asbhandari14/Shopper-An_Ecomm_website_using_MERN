import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppContextConsumer } from '../Context/ShopContext'

const Items = ({id, image, name, old_price, new_price}) => {
  const {darkMode} = AppContextConsumer();

  return (
    <>
      <NavLink to={`/product/${id}`}><div key={id} className={`w-full h- flex flex-col justify-center items-center text-center ${(darkMode)?"bg-[#242424] text-white shadow-2xl":" bg-white shadow-xl border-1 border-gray-200"} text-zinc-600  rounded-md shadow-xl gap-2`}  onClick={()=>{window.scrollTo(0, 0)}}>
        <img src={image} loading='lazy' className='w-auto h-[26rem] bg-cover rounded-t-md max-lg:h-[20rem] max-md:h-[15rem]' alt="" />
        <h1 className='w-full'>{(name.length>40)?name.slice(0, 35)+"...":name}</h1>
        <div className="item_price w-full h-full flex justify-center items-center gap-6 text-lg">
            <p className='font-semibold'>&#8377; {new_price}</p>
            <p className='line-through font-semibold text-red-600'> &#8377; {old_price}</p>
        </div>
      </div></NavLink>
    </>
  )
}

export default Items
