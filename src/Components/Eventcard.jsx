

import {Link} from "react-router-dom"
export default function Eventcard({title,image,id}) {
    
    return (
       <Link to={`/event/${id}`}>
      <div className="relative w-[250px] h-[284px] mx-auto bg-white shadow-lg overflow-visible rounded-lg group">
        {/* Background effects */}
        <div className="absolute inset-0 rounded-lg bg-white transition-transform duration-500 -z-10 group-hover:rotate-[20deg]"></div>
        <div className="absolute inset-0 rounded-lg bg-white transition-transform duration-500 -z-10 group-hover:rotate-[10deg] shadow-md"></div>
  
     
        <div className="absolute inset-[10px] bg-gray-900 transition-all duration-500 z-10 group-hover:bottom-[80px] rounded-md flex-grow">
          <div className={`w-full h-full  bg-center bg-cover relative`}>
            <img className=" w-full h-full bg-cover" src={image} alt="" />
            <div className=" absolute left-3 top-30 bg-[#F7DF1E] text-black w-[200px] text-center h-[30px] rounded-full"><a1  className=" text-center font-extrabold ">{title}</a1></div>
          </div>
          
        </div>
  
        {/* Details */}
        <div className="absolute bottom-[25px] left-[-10px]  right-0 text-center uppercase">
          <a href={`/event/${id}`} className="text-white rounded-full p-5 hover:bg-[#F7DF1E] hover:text-black transition-all duration-500  font-serif  font-semibold text-lg bg-black ">Know More➡️</a>
        
          
        </div>
      </div>
      </Link>
      
    );
  }
  