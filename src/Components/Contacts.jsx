import React from "react";

const Contacts = () => {
  return (
    <div className=" w-full h-screen bg-[#10182F] flex justify-center items-center  ">
      <div className=" flex flex-col md:flex-row gap-10">
        <div className=" w-[300px] md:w-[400px] h-[200px] md:h-[300px] ">

        <img className=" w-full h-full object-cover rounded-md" src="/contactadmission.webp" alt="" />
        </div>
        <div className="  w-[400px] h-[200px] mr-5 flex flex-col justify-center items-center text-white font-poppins">
          <div className=" flex justify-center items-center gap-3">
            <img className=" w-20 h-20  " src="/telephone1.png" alt="" />
            <div className=" flex flex-col">

            <p><span>M. Abhishek </span> +91 9361601022</p>
            <p><span>Ajay Raj </span> +91 8220183205</p>
            </div>
          </div>
          <div className=" flex  justify-center items-center gap-3 ml-16 mt-5">
            <img className=" w-16 h-16   " src="/gmail.png" alt="" />
            <p className=" pr-[80px]">netrix2k25@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
