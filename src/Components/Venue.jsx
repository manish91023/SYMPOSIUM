import React from "react";

const Venue = ({ address }) => {
  return (
    <div className=" w-full mx-auto flex justify-center items-center  shadow-lg rounded-2xl p-4 ">
      <img className=" w-10 h-10" src="/location.png" alt="" />
      <div className="mt-2 text-white font-bold">
        <p>{address.street}</p>
        
      </div>
    </div>
  );
};



  const userAddress = {
    street: " Vinayaka Nagar,Rajiv Gandhi Salai,(old Mahaballipuram Road) Paiyanoor Chennai-603104,Tamil Nadu,India"
  };




export default Venue;
