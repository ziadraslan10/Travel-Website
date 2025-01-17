import React from "react";
import Places from "../../components/Places/Places";
import OrderPopup from "../../Components/OrderPopup/OrderPopup";

const PlacesRoute = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
  
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
  return (
    <>
      <div className="pt-14">
        <Places handleOrderPopup={handleOrderPopup} />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  );
};

export default PlacesRoute;
