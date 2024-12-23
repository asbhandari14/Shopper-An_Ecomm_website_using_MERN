import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios"

export const AppContext = createContext();



const AppContextProvider=({children})=>{
    const [darkMode, setDarkMode] = useState();
    const [cartArray, setCartArray] = useState([]);
    const [tokenValue, setTokenValue] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [hiddenNavbar, setHiddenNavbar] = useState(false);

    const URL = "https://shopper-an-ecomm-website-using-mern.onrender.com";
    
 
    const darkModeValue=(mode)=>{
        setDarkMode(mode);
    }


    const cartItem =(item, size)=>{
        let arrItemWithSize = {...item, size};
        setCartArray((prev)=>{return [...prev, arrItemWithSize]});
    }


    const findCartLength=()=>{
        return cartArray.length;
    }


    const removeCartItem=(itemId)=>{
        setCartArray((prev)=>{ return prev.filter(currElem=>currElem._id != itemId)})
    }


    const getTheProductArray=async()=>{
        const res = await axios.get(`${URL}/product/getAllProduct`, {withCredentials : true});
        return res;
    }


    const getTotalCartItems=()=>{
        const totalPrice = cartArray.reduce((accumulator, currElem)=> {return accumulator=accumulator+currElem.productNewPrice}, 0);
        return totalPrice;
    }


    const logoutUser=()=>{
        setTokenValue("");
        window.localStorage.setItem("token", "");
    }

    
    const storeTokenInLocalStorage=(token)=>{
        window.localStorage.setItem("token", token);
        setTokenValue(token);
    }


    const storeUserInfo=async(userInfoVal)=>{
        setUserInfo({...userInfoVal});
    }


    useEffect(()=>{
        findCartLength();
        getTheProductArray();
    }, [darkMode, cartArray])

    return(
        <AppContext.Provider value={{darkModeValue, darkMode, cartItem, cartArray, findCartLength, removeCartItem, getTheProductArray, getTotalCartItems, storeTokenInLocalStorage, tokenValue, logoutUser, URL,storeUserInfo, userInfo, hiddenNavbar, setHiddenNavbar}}>
            {children}
        </AppContext.Provider>
    )
}


export const AppContextConsumer=()=>{
    return useContext(AppContext)
}

export default AppContextProvider
