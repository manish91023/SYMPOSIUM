import Eventcard from "./Eventcard";
import ParticleBackground from "./Particle/ParticleBg";

const NontechnicalEvent = () => {
  return (
    <div className='relative text-white w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5  mt-[100px] p-5 place-items-center'>
     <div className=" absolute top-0 left-0">
      <ParticleBackground/>
     </div>
      <Eventcard image={"/memer.jpg"} title={"MEMS"} id={7} />
      <Eventcard image={"/inkspeller.jpg"} title={"Inkspeller"} id={8} />
      <Eventcard image={"/games.jpg"} title={"Games"} id={9} />
      <Eventcard image={"/ideaMining.webp"} title={"Idea Mining"} id={10} />
      
    </div>
  );
};

export default NontechnicalEvent;
