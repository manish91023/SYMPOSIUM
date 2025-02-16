import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#10182F] flex justify-center items-center">
      <div className=" flex justify-center md:w-full md:h-screen relative overflow-hidden">
        <div className=" md:hidden absolute   text-center mt-[90px]">
          <h2 className=" text-green-200 orbitron">Welcome to</h2>
          <h1 className="text-2xl text-white font-bold">
            Vinayaka Mission's Research Foundation (Deemed To Be University)
          </h1>
          <p className=" font-poppins text-gray-300">
            Vinayaka Mission’s Research Foundation was established with the
            vision of augmenting the choicest education for all. The University
            is located at Salem with four campuses situated at two different
            districts of Tamil Nadu and Puducherry respectively. VMRF-DU has a
            global reputation as a Multi- disciplinary University.
          </p>
        </div>
        <img
          className="mt-[110%] w-full h-auto object-cover rounded-md md:mt-[110px]"
          src="/about-sample.webp"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50 mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default About;
