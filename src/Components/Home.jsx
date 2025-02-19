import Card from "./Card";
import logo from "/tech.svg";
import CountDown from "./CountDown";
import Venue from "./Venue";
import Announcement from "./Announcement";

export default function Home() {
  const userAddress = {
    street:
      " Vinayaka Nagar,Rajiv Gandhi Salai,(old Mahaballipuram Road) Paiyanoor Chennai-603104,Tamil Nadu,India",
  };
  return (
    <div>
      {/* Sections */}
      <section
        id="home"
        className=" relative mx-auto w-full h-[150vh] md:h-[210vh]   mt-3  bg-[url('/bg2.jpg')] bg-cover bg-center"
      >
        <div className=" flex justify-center items-start gap-[2rem]">
          <div className=" w-full h-screen">
            <div className=" text-center text-white p-5 mt-[100px]">
              <h2 className="orbitron text-2xl font-serif md:text-5xl   ">
                Department Of
              </h2>
              <h1
                className=" poppins-black  text-3xl md:text-7xl font-bold mt-3 mb-3 text-clip text-transparent bg-clip-text opacity-80
bg-[#7bd4fa]
"
              >
                COMPUTER SCIENCE AND ENGINEERING
              </h1>
              <h2 className=" orbitron  text-3xl  ">Welcomes You</h2>

              <div className=" flex flex-col  justify-center items-center mx-auto gap-20 md:ml-[100px] md:p-10">
                <div className=" relative ">
                  <img
                    className=" hidden ml-18 md:block md:w-[450px] md:h-[320px] pt-5 mx-auto"
                    src="/mdai.png"
                    alt=""
                  />
                  <img
                    className=" md:hidden w-[250px] h-[150px] mt-7  mx-auto"
                    src="/smai.png"
                    alt=""
                  />
                 

                  {/* <div className=" md:hidden absolute w-[200px] top-[75px] left-[70px]    poppins-bold text-green-100 ">
                    NEXUS CLUB
                  </div> */}
                </div>
                <div className=" relative">
                  <img
                    className=" w-[350px] h-[190px] md:w-[480px] md:h-[370px]  mx-auto "
                    src="/netrixai.png"
                    alt=""
                  />

                 
                  {/* <div className=" md:hidden absolute w-[200px] top-[35px] left-[-5px]  font-bold  poppins-bold text-blue-200 ">
                    NETRIX-2K25
                  </div>
                  <div className=" hidden  absolute   w-[500px]   left-[60px] top-[70px] ">
                    <img className=" w-full" src="/nets.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div className=" text-[20px] pt-6 poppins-medium-italic    text-transparent text-clip bg-clip-text bg-gradient-to-l from-rose-300 to-teal-300 md:text-3xl">
                <p className=" text-center">A National Level Symposium on</p>
                {/* <img
                  className=" mx-auto w-[200px] h-[100px] "
                  src="/date_transparent.png"
                  alt=""
                /> */}
                <h1 className=" text-3xl text-gray-300 shadow-2xl   md:poppins-bold md:p-4">13<sup>th</sup> & 14<sup>th</sup> March 2025</h1>
              </div>
              

             

             <CountDown targetDate="2025-03-13T23:59:59" />
             
              
            </div>
          </div>
          <div className=" hidden md:block w-[500px]  relative right-0 mt-[100px]">
            <img className=" w-[500px] h-[500px] " src={logo} alt="tech logo" />
          </div>

          <div className=" absolute  left-0 bottom-0 flex justify-center items-center gap-4 mt-5 pb-20 w-full md:px-4">
            <a
              className="w-full md:w-[280px] h-[50px] shadow-2xs flex items-center justify-center font-bold hover:bg-[#50acd7] bg-[#7cf84b] rounded-full text-center"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoYmQLqwkrGoSTJ8mhiFB48npm-B8WNKT7NOWR0svh5pzfdg/viewform?usp=header" target="_blank"
            >
              Register <span className=" animate-bounce mt-2">➡️</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="m-h-screen flex flex-col items-center justify-center   bg-[#10182F]"
      >
        <div className=" pl-[10%] pr-[10%] w-full h-[110px] text-white">
          <a href="https://maps.app.goo.gl/6b4eKcLvXDCFmJ6Z7" target="_blank">
          <Venue address={userAddress} />
          </a>
        </div>
        <h2 className=" text-3xl md:text-6xl font-bold text-[#eff311] mt-3 mb-[70px]">
          Explore Symposium
        </h2>
        <div>
          <div className="  flex flex-col md:flex-row  justify-center items-center gap-10 p-5">
            <div>
              <Card
                eventDesc={[
                  "Quiz Master",
                  "Bug Busters",
                  "Poster Presentations",
                  "Idea Jams",
                ]}
                eventType={"Technical Events"}
                eventUrl={"technicalevent"}
              />
            </div>
            <div>
              <Card
                eventDesc={[
                  "Memer",
                  "InkSpeller",
                  "Play Master",
                  "Much More...",
                ]}
                eventType={"Non-Technical Events"}
                eventUrl={"nontechnicalevent"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
