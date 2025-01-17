/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import OrderPopup from "../../components/OrderPopup/OrderPopup";




function Layout() {

    const [orderPopup, setOrderPopup] = useState(false);
  
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };


  return <>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <div className="">
      <Outlet/>
    </div>
    <Footer/>
    
    <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </>
}

export default Layout






