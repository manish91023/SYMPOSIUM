import React from "react";

const Venue = ({ address }) => {
  return (
    <div className=" w-full mx-auto flex justify-center items-center  shadow-lg rounded-2xl p-4 ">
      <img className= " w-5 h-5 md:w-10 md:h-10" src="/location.png" alt="" />
      <div className="mt-2 text-white md:font-bold ">
        <p>{address.street}</p>
        
      </div>
    </div>
  );
};



  const userAddress = {
    street: " Vinayaka Nagar,Rajiv Gandhi Salai,(old Mahaballipuram Road) Paiyanoor Chennai-603104,Tamil Nadu,India"
  };




export default Venue;
