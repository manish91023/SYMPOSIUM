import Eventcard from "./Eventcard";

const NontechnicalEvent = () => {
  return (
    <div className='text-white w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center bg-[#00283A] mt-[100px]   p-5 '>
      <Eventcard image={"/memer.jpg"} title={"MEMS"} id={7} />
      <Eventcard image={"/inkspeller.jpg"} title={"Inkspeller"} id={8} />
      <Eventcard image={"/games.jpg"} title={"Games"} id={9} />
      <Eventcard image={"/ideaMining.webp"} title={"Idea Mining"} id={10} />
      
    </div>
  );
};

export default NontechnicalEvent;
