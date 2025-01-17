/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    // <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
    <div><img src={img} className="bg-cover min-h-72" /></div>
  );
};

export default BannerPic;
