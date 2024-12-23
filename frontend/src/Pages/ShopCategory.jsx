import React, { useEffect, useState } from 'react'
import Items from '../Components/Items'
import { AppContextConsumer } from '../Context/ShopContext'
import { FaSpinner } from "react-icons/fa";



const ShopCategory = ({ category }) => {
    const { darkMode, getTheProductArray } = AppContextConsumer();
    const [productArrayData, setProductArrayData] = useState([]);

    const getTheProductArrayValue = async () => {
        try {
            const res = await getTheProductArray();
            if (res.data.success) {
                setProductArrayData((prev) => { return [prev, ...res.data.allProduct] })
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTheProductArrayValue();
    }, [])

    const menProduct = productArrayData.filter((currElem) => { return currElem.productCategory === 'Men' });
    const womenProduct = productArrayData.filter((currElem) => { return currElem.productCategory == 'Women' });
    const kidProduct = productArrayData.filter((currElem) => { return currElem.productCategory == "Kids" });

    const productArray = (category == "men") ? menProduct : (category == "women") ? womenProduct : kidProduct;
    return (
        <>

            <div className={`shopCategory_outer_container ${(darkMode) ? "bg-[#242424] text-white" : ""}`}>
                {(category == "men") ? <img src="../Images/banner_men.png" alt="" /> : (category == "women") ? <img src="../Images/banner_women.png" alt="" /> : <img src="../Images/banner_kids.png" alt="" />}

                {
                    (!productArray.length > 0) ? <div className=' w-[95%] min-h-screen text-blue-600 text-5xl animate-spin flex justify-center items-center'><FaSpinner /></div> :
                        <div className="w-[90%] mx-auto h-full grid grid-cols-3 max-md:grid-cols-2 gap-10 max-md:gap-[2.5rem_0.5rem] py-12">
                            {
                                productArray?.map((currElem) => {
                                    return (
                                        <Items key={currElem._id} id={currElem._id} name={currElem.productTitle} image={currElem.productImg.secure_url} new_price={currElem.productNewPrice} old_price={currElem.productOldPrice} />
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default ShopCategory
