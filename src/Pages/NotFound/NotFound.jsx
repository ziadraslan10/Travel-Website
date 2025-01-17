/* eslint-disable no-unused-vars */
import React from 'react'
import img from "../../assets/not-found.jpg"

function NotFound() {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    // <div data-aos="zoom-in" className="h-[400px] w-full mt-32 " style={bgImage}></div>
    <div><img src={img} className='mt-20' /></div>
  );
}

export default NotFound