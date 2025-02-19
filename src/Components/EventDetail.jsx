import React from "react";
import { useParams } from "react-router-dom";
import events from "./Data";

const EventDetail = () => {
  const { eventid } = useParams();
  const event = events.find((e) => e.id === parseInt(eventid));

  if (!event) {
    return <div className=" w-full h-screen bg-[#10182F]  text-white flex justify-center items-center poppins"><p>No event added by developer yet</p></div>; // Add error handling
  }

  return (
    <div className="bg-[#071857] w-full min-h-screen mt-[100px]">
      <h1 className="text-center font-mono pb-4 text-sky-200 pt-7 font-extrabold text-2xl  md:text-6xl">
        {event.name || "Quiz Master"} {/* Use event.name instead of hardcoded */}
      </h1>
      <h4 className="text-center font-bold text-white text-3xl p-4">
        Description <div className="animate-bounce">👇</div>
        <p className="text-[20px] font-normal md:text-2xl">{event.description}</p>
      </h4>

      <div className="text-amber-300 text-xs poppins-thin pl-5 md:pl-30">
        <div className=" poppins-bold">

        <h1 >Event Coordinator: {event.coordinator || "Manish Kumar"}</h1>
        <h1>Contact No: {event.contactNumber || "6380274393"}</h1>
        </div>
        {/* <h1>Entry Fee: {event.entryFee || "50Rs/Team"}</h1> */}
        <div className="text-white font-serif mt-5">
          <h1 className="md:text-4xl font-bold text-clip text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            RULE AND REGULATION
          </h1>
          <ul className=" pt-5 poppins-regular">
          {event.rules.map((rule, index) => (
            <li key={index} className="mb-2 font-poppins">
              👉 {rule}
            </li>
          ))}
           {/* <li className="mt-7">
              <a
                href={event.registrationLink}
                className=" poppins-light pl-[10px] pr-[10px] pt-[5px] pb-[5px] md:pl-[50px] md:pr-[50px] md:pt-[15px] mb-10 md:pb-[15px] mt-3 md:mt-[100px] bg-yellow-300 hover:bg-green-300 text-black rounded-full text-center"
              >
                Register Now
              </a>
            </li> */}
            <li>{/* Add any additional rules here */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;