import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContextConsumer } from '../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { LuLoader2 } from "react-icons/lu";

const Login = () => {
  const [input, setInput] = useState({ email : "", password : ""});
  const [loading, setLoading] = useState(false);

  

  const navigate = useNavigate();
  const {storeTokenInLocalStorage, storeUserInfo,  URL} = AppContextConsumer();



  const handleChangeInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput({...input, [name]:value});
  }

  const handleSubmitForm=async(e)=>{
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${URL}/auth/login`, input, {headers: {"Content-Type": "application/json"}, withCredentials: true})
      if(res.data.success){
        storeTokenInLocalStorage(res.data.token);
        storeUserInfo(res.data.userInfo);
        const notify = () => toast.success(res.data.mssg);
        notify();
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      const notify = () => toast.error(error.response.data.mssg);
      notify();
      setLoading(false);
    } finally{
      setLoading(false);
    }
  }


  return (
    <>
      <div className="login_outer_container w-full bg-[#829bff] flex justify-center items-center py-16">
        <form className="login_inner_container container w-[380px] max-sm:w-[80%] bg-white flex flex-col items-center justify-start rounded-md gap-3 py-6" onSubmit={handleSubmitForm}>
            <h1 className='text-2xl my-3 font-semibold'>Log In</h1>
            <input type="text" placeholder='demo123@gmail.com' className='w-[95%] mx-auto py-2 px-4  border border-zinc-600 outline-none rounded-md' name="email" value={input.email} onChange={handleChangeInput}/>
            <input type="text" placeholder='demo123' className='w-[95%] mx-auto py-2 px-4  border border-zinc-600 outline-none rounded-md' name="password"  value={input.password} onChange={handleChangeInput} />
            <button className='text-center w-[95%] mx-auto py-2 bg-red-600 text-white flex justify-center items-center gap-3' type='submit'>Login <LuLoader2 className={`${(loading)?"animate-spin": "hidden"}`} /></button>
            <p>Create a new account ? <NavLink to="/signup"><span className='font-semibold text-sm text-red-500'>Sign up Here</span></NavLink> </p>
            <p className='py-2 text-center text-sm'>By continuing I agree to the terms of use & privacy policy</p>
        </form>
      </div>
    </>
  )
}

export default Login
