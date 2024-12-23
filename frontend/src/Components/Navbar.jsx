import React, { useEffect, useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContextConsumer } from '../Context/ShopContext';
import { IoMdSunny } from "react-icons/io";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";




const Navbar = () => {
  const [borderStyle, setBorderStyle] = useState('Shop');
  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const { darkModeValue, darkMode, findCartLength, tokenValue, logoutUser, userInfo, storeUserInfo, setHiddenNavbar, hiddenNavbar } = AppContextConsumer();

  return (
    <>
      <div className={`navbar_outer_container w-full h-20 flex justify-center items-center ${(darkMode) ? "bg-black text-white" : ""}`}>
        <div className="navbar_inner_container container w-[90%] h-full flex justify-between items-center">
          <NavLink to="/"><div className="navbar_logo flex justify-center items-center gap-2" onClick={() => { setBorderStyle("Shop") }}>
            <img src="../Images/nav_logo.png" className='w-16' alt="" />
            <h1 className='text-2xl font-semibold'>Shopper</h1>
          </div></NavLink>

          <div className="navbar_route flex justify-center items-center gap-12 list-none max-lg:hidden">
            <NavLink to="/"><li className={` cursor-pointer ${(borderStyle == "Shop") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Shop") }}>Shop</li></NavLink>
            <NavLink to="/men"><li className={` cursor-pointer ${(borderStyle == "Men") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Men") }}>Men</li></NavLink>
            <NavLink to="/women"><li className={` cursor-pointer ${(borderStyle == "Women") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Women") }}>Women</li></NavLink>
            <NavLink to="/kids"><li className={` cursor-pointer ${(borderStyle == "Kids") ? "border-b-2 border-red-600" : ""} `} onClick={() => { setBorderStyle("Kids") }}>Kids</li></NavLink>
          </div>

          <div className="navbar_login flex justify-center items-center gap-8  max-lg:hidden">
            <NavLink to="/cart"><div className="cart relative">
              <IoCartSharp className='text-2xl relative' />
              <div className=" absolute w-4 h-4 bg-red-600 text-white flex justify-center items-center rounded-xl text-xs -top-1 left-4">{findCartLength()}</div>
            </div></NavLink>
          </div>


          {
            (userInfo && userInfo?.isAdmin) ? <NavLink to="/admin"><button className={`px-4 py-2.5 rounded-full text-zinc-600 ${(darkMode) ? "text-white border-green" : "text-zinc-600"} max-lg:hidden outline-none border border-gray-600`}>Dashboard</button></NavLink>
              : ""
          }


          <div className="light_dark_mode cursor-pointer flex justify-start items-center gap-6 max-lg:hidden" >
            {
              (mode) ? <BiSolidMoon className='text-2xl ' onClick={() => { setMode(!mode); darkModeValue(mode) }} /> : <IoMdSunny className='text-2xl' onClick={() => { setMode(!mode); darkModeValue(mode) }} />
            }
          </div>

          <div className='flex justify-center items-center gap-4'>
            {
              (tokenValue) ?
                <div className=' flex justify-start items-center gap-1 cursor-pointer group relative'>
                  <p className='w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center' onClick={() => { setShowMenu(!showMenu); }}><FaUser className='text-2xl' /></p>
                  <RiArrowDropDownFill className='text-2xl' onClick={() => { setShowMenu(!showMenu) }} />
                  <div onClick={() => { setShowMenu(!showMenu) }} className={`absolute right-0 -bottom-24 z-10 p-2.5 min-w-48  text-zinc-600 text-sm flex flex-col justify-start items-start gap-3 rounded-md ${(darkMode) ? "bg-[#242424] text-white" : "bg-slate-200"}  ${(showMenu) ? " " : "hidden"}`}>
                    <NavLink className="w-full" to="/myOrder"><p className={`w-full hover:text-black`}>My Order</p></NavLink>

                    <p onClick={() => { setShowMenu(false), storeUserInfo({}), logoutUser(), navigate("/") }} className='w-full hover:text-black'>Logout</p>
                  </div>
                  {/* Hidden Menu for the Mobile Navigation */}

                </div>
                : <NavLink to="/login"><button className={`navbar_btn px-8 py-2.5 rounded-full text-sm text-zinc-600 ${(darkMode) ? "text-white border-white" : "text-zinc-600"} max-lg:hidden uppercase tracking-wider border border-gray-600`}>Login</button></NavLink>
            }
            <span className='relative hidden max-lg:flex'><IoMenu className=' hidden max-lg:flex text-2xl font-semibold' onClick={() => { setHiddenNavbar(!hiddenNavbar); console.log(hiddenNavbar)}} />
            <div className={` ${(findCartLength() >0)?"w-2.5 h-2.5 bg-red-500 rounded-full absolute top-0 right-0":"hidden"}`}></div>
            </span>
          </div>



        </div>
      </div>
    </>
  )
}

export default Navbar
