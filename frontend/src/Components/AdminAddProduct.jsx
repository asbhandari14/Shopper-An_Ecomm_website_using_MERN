import React from 'react'
import { AppContextConsumer } from '../Context/ShopContext';

const AddProductAdmin = () => {
    const {darkMode} = AppContextConsumer();
    return (
        <>
            <div className={`w-full ${(darkMode)?"bg-black text-white": "bg-white"}  flex justify-center items-center`}>
                <div className={`w-[90%] flex flex-col gap-3 p-8 ${(darkMode)?"bg-[#242424] text-white": "bg-[#f3f3f6]"} rounded-lg`}>
                    <div className='flex flex-col'>
                        <label htmlFor="productTitle">Product title</label>
                        <input type="text" id='productTitle' placeholder='Type Here' className='py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="productTitle">Product Description</label>
                        <input type="text" id='productTitle' placeholder='Type Here' className='py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                    </div>
                    <div className='w-full flex justify-between items-center gap-12 my-2'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Product New Price</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Product Old Price</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Stock Size</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center gap-12 my-2'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Product Related Tags</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Available Product Sizes</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-zinc-600' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center gap-12 my-2'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Product Category</label>
                            <input type="text" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md text-black' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="productTitle">Product Image</label>
                            <input type="file" id='productTitle' placeholder='Type Here' className='w-full py-2.5 px-4 border-1 border-zinc-400 outline-none rounded-md' />
                        </div>
                    </div>

                    <button className='w-[60%] mx-auto py-2.5 bg-green-600 text-white my-6 rounded-md'>Add The Product</button>
                </div>
            </div>
        </>
    )
}

export default AddProductAdmin
