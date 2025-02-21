import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import events from "./Data";
import ParticleBackground from "./Particle/ParticleBg";



const EventDetail = () => {
  

  const { eventid } = useParams();
  const event = events.find((e) => e.id === parseInt(eventid));





  if (!event) {
    return (
      <div className="w-full h-screen bg-[#10182F] text-white flex justify-center items-center poppins">
        <p>No event added by developer yet</p>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
     
      
      <div className="relative z-10 bg-opacity-50 bg-[url('/technicalbg.jpg')] md:bg-[url('/technicalbg5.png')] bg-center bg-no-repeat w-full min-h-screen pt-[100px]">
        <h1 className="text-center font-mono pb-4 text-green-50 pt-7 font-extrabold text-2xl md:text-6xl">
          {event.name || "Quiz Master"}
        </h1>
        <h4 className="text-center font-bold text-white text-3xl p-4">
          Description <div className="animate-bounce">👇</div>
          <p className="text-[20px] font-light md:text-2xl">{event.description}</p>
        </h4>

        <div className="text-amber-300 text-xl poppins-thin pl-5 md:pl-30">
          <div className="poppins-bold">
            <h1>Event Coordinator: {event.coordinator || "Manish Kumar"}</h1>
            <h1>Contact No: {event.contactNumber || "6380274393"}</h1>
          </div>

          <div className="text-white   font-serif mt-5">
            <h1 className=" text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-green-600 md:bg-gradient-to-r from-pink-500 to-black">
              RULES AND REGULATIONS
            </h1>
            <ul className="pt-5 text-xs md:text-xl poppins-regular">
              {event.rules.map((rule, index) => (
                <li key={index} className=" mb-3 font-poppins">
                  👉 {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
