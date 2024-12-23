import React, { useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContextConsumer } from '../Context/ShopContext';
import { IoMdSunny } from "react-icons/io";
import { IoMenu } from "react-icons/io5";


const HiddenNavbar = () => {

    const [borderStyle, setBorderStyle] = useState('Shop');
    const [mode, setMode] = useState(true);
    const navigate = useNavigate();
  
    const { darkModeValue, darkMode, findCartLength, tokenValue, userInfo, logoutUser, hiddenNavbar, setHiddenNavbar} = AppContextConsumer();
    console.log(hiddenNavbar);
    console.log(userInfo)

  return (
    <>
      <div className={`hiddenNavbar_container ${(darkMode)?"bg-[#242424] text-white":""}  w-full ${(hiddenNavbar)?"flex flex-col":"hidden"}  justify-center items-center py-6 `}>
      <div className="navbar_route flex flex-col justify-center items-center gap-3 list-none">

            <NavLink to="/"><li className={`cursor-pointer ${(borderStyle == "Shop") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Shop"); setHiddenNavbar(!hiddenNavbar) }}>Shop</li></NavLink>
            <NavLink to="/men"><li className={` cursor-pointer ${(borderStyle == "Men") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Men"); setHiddenNavbar(!hiddenNavbar) }}>Men</li></NavLink>
            <NavLink to="/women"><li className={` cursor-pointer ${(borderStyle == "Women") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Women"); setHiddenNavbar(!hiddenNavbar) }}>Women</li></NavLink>
            <NavLink to="/kids"><li className={` cursor-pointer ${(borderStyle == "Kids") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Kids"); setHiddenNavbar(!hiddenNavbar) }}>Kids</li></NavLink>
          </div>

          <div className="navbar_login flex flex-col justify-center items-center gap-8 mt-8 ax-lg:hidden">
            {
              (tokenValue) ? <button className='px-4 py-2 border rounded-3xl uppercase text-sm' onClick={()=>{logoutUser(); navigate("/"); setHiddenNavbar(!hiddenNavbar)}}>Logout</button> : (<NavLink to="/login"><button className='px-4 py-2 border rounded-3xl uppercase text-sm' onClick={()=>{setHiddenNavbar(!hiddenNavbar)}}>Log In</button></NavLink>)
            }
            <NavLink to="/cart"><div className="cart relative" onClick={()=>{setHiddenNavbar(!hiddenNavbar)}}>
              <IoCartSharp className='text-2xl relative' />
              <div className=" absolute w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-xl text-xs -top-1 left-4">{findCartLength()}</div>
            </div></NavLink>
          </div>

          {
            (userInfo && userInfo?.isAdmin) ? <NavLink to="/admin"><button className=' px-4 py-2.5 rounded-full text-zinc-600 ${(darkMode) ? "text-white border-white" : "text-zinc-600"} border border-gray-600'>Dashboard</button></NavLink>
              : ""
          }

          <div className="light_dark_mode cursor-pointer mt-3 "  >
            {
              (mode) ? <BiSolidMoon className='text-2xl' onClick={() => { setHiddenNavbar(!hiddenNavbar); setMode(!mode); darkModeValue(mode);  }} /> : <IoMdSunny className='text-2xl' onClick={() => { setMode(!mode); darkModeValue(mode); setHiddenNavbar(!hiddenNavbar); }} />
            }
          </div>
      </div>
    </>
  )
}

export default HiddenNavbar
