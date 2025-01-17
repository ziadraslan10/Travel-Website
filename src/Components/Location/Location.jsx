/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7684617949935!2d31.237866500000003!3d30.043499799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b800e30191%3A0xb9c5dce89e8cf2ff!2sMohammed%20Mahmoud%2C%20Cairo%20Governorate%204280030!5e0!3m2!1sen!2seg!4v1737144872107!5m2!1sen!2seg" 
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
