import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="newsletter_outer_container w-full min-h-[50vh] flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-pink-500 via-pink-500 to-white">
                    <h1 className='text-6xl font-semibold text-center max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Get Exclusive Offers on Your Email</h1>
                    <p className='text-xl font-semibold max-sm:text-lg'>Subscribe to our newletter and stay updated</p>
                    <div className="newsletter_input_box w-full flex max-sm:flex-col  justify-center items-center gap-3">
                        <input type="text" className='w-[40%] max-md:w-[70%] max-sm:w-[90%] py-2 px-4 rounded-3xl' placeholder='Enter Your Email Id' />
                        <button  className='py-2 px-4 bg-red-600 text-white rounded-3xl font-semibold'>Subscribe</button>
                    </div>
            </div>
        </>
    )
}

export default Newsletter
