// /* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../../Components/Hero/Hero";
import mainVideo from "../../assets/video/main.mp4";
import BlogsComp from "../../components/Blogs/BlogsComp";
import Places from "../../components/Places/Places";
// import Testimonial from "../../components/Testimonial/Testimonial";
import Banner from "../../components/Banner/Banner";
import BannerPic from "../../components/BannerPic/BannerPic";
import BannerImg from "../../assets/cover-women.jpg";
import Banner2 from "../../assets/travel-cover2.jpg";
import OrderPopup from "../../Components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={mainVideo} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        {/* <Testimonial /> */}
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
