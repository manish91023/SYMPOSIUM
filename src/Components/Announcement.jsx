import React from 'react'
import "../index.css"
const Announcement = () => {
  return (
    <div className=' w-full h-[30px] text-green-400 bg-white text-center'>
      
        <marquee c behavior=" " direction="l" className="orbitron"> 💫 Technical Event Held On 13.03.2025 💫 Non-Technical Event Held on 14.03.2025 💫</marquee>
    </div>
  )
}

export default Announcement