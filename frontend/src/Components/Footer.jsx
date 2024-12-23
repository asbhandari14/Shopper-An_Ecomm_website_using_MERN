import React from 'react'
import { AppContextConsumer } from '../Context/ShopContext'

const Footer = () => {
    const {darkMode} = AppContextConsumer();
    // #4b658d
    return (
        <>
            <div className={`footer_outer_container w-full h-auto ${(darkMode)?"bg-[#4b658d] text-white":"bg-[#b8d2fa]"}  flex flex-col`}>
                <div className="footer_upper_container w-full h-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-[8fr_4fr] gap-4 py-16 px-2">
                
                    <div className='w-full flex flex-col justify-start items-center text-center gap-2'>
                        <div className="footer_logo flex justify-center items-center gap-2">
                            <img src="../Images/nav_logo.png" className='w-16' alt="" />
                            <h1 className='text-2xl font-semibold'>Ecomm</h1>
                        </div>
                        <p className='text-lg'>Wear the premium tshirts, hoddies, sweatshirts, zipper and apparals</p>
                    </div>

                    <div className='w-full flex flex-col justify-start items-center text-center gap-2 text-lg'>
                        <p className='text-2xl font-semibold uppercase'>Shop</p>
                        <p>SweatShirts</p>
                        <p>Hoddies</p>
                        <p>Zipper Hoddies</p>
                    </div>

                    <div className='w-full flex flex-col justify-start items-center text-center gap-2 text-lg'>
                        <p className='text-2xl font-semibold uppercase'>Customer Service</p>
                        <p>Contact US</p>
                        <p>About Us</p>
                        <p>Return Policy</p>
                    </div>

                    <div className='w-full flex flex-col justify-start items-center text-center gap-2 text-lg'>
                        <p className='text-2xl font-semibold uppercase'>Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Reserved All Right</p>
                    </div>
                </div>
                 
                 <p className='w-full text-center py-4'>Copyright © 2023 - All Right Reserved</p>
            </div>
        </>
    )
}

export default Footer
