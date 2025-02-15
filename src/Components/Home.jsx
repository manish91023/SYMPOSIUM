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
        className=" relative mx-auto w-full h-[118vh] mt-3  bg-[url('/bg1.jpg')] bg-cover bg-center"
      >
        <div className=" flex justify-center items-start gap-[2rem]">
          <div className=" w-full h-screen">
            <div className=" text-center text-white p-5 mt-[100px]">
              <h2 className="orbitron text-2xl font-serif md:text-5xl   ">
                Department Of
              </h2>
              <h1
                className=" poppins-black  text-3xl md:text-7xl font-bold mt-3 mb-3 text-clip text-transparent bg-clip-text bg-gradient-to-l
from-[#38bdf8]
via-[#fb7185]
to-[#84cc16]"
              >
                COMPUTER SCIENCE AND ENGINEERING
              </h1>
              <h2 className=" orbitron  text-3xl  ">
                Welcomes You
              </h2>

              <div className=" flex justify-center items-center gap-7 ">
                <div className=" relative ">
                  <img
                    className=" w-[130px] h-[80px] md:w-[230px] md:h-[130px] mx-auto"
                    src="/Picture7.png"
                    alt=""
                  />
                  {/* <div className=" text-[15px]  absolute top-[40px] md:top-[60px] left-[70px] md:left-[120px] md:text-2xl font-bold">NEXUS CLUB</div> */}
                </div>
                <div>
                  <img
                    className=" w-[120px] h-[80px] md:w-[160px] md:h-[140px] mx-auto mt-5"
                    src="/NETRIX-2k25.png"
                    alt=""
                  />
                </div>
              </div>
                <div className=" text-[20px] pt-6 poppins-medium-italic   text-transparent text-clip bg-clip-text bg-gradient-to-l from-rose-300 to-teal-300 md:text-3xl">
                  <p>A National Level Technical / Non-Technical Symposium on</p>
                  <img className=" mx-auto w-[200px] h-[100px] " src="/date_transparent.png" alt="" />
                </div>
              <CountDown targetDate="2025-03-13T23:59:59" />
            </div>
          </div>
          <div className=" w-[500px]  relative right-0 mt-[100px]">
            <img className=" w-[500px] h-[500px] " src={logo} alt="tech logo" />
          </div>

          <div className=" absolute  left-0 bottom-0 flex justify-center items-center gap-4 mt-5 mb-10 w-full px-4">
            <a
              className="w-full md:w-[280px] h-[50px] shadow-2xs flex items-center justify-center font-bold hover:bg-[#50acd7] bg-yellow-400 rounded-full text-center"
              href="#register"
            >
              Register <span className=" animate-bounce mt-2">➡️</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="m-h-screen flex flex-col items-center justify-center  bg-[#10182F]"
      >
        <div className=" pl-[10%] pr-[10%] w-full h-[110px] text-white">
          <Venue address={userAddress} />
        </div>
        <h2 className=" text-3xl md:text-6xl font-bold text-[#ECF63D] mt-3 mb-[70px]">
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
