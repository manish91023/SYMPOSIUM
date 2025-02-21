import Eventcard from "./Eventcard";
import ParticleBackground from "./Particle/ParticleBg";

const TechnicalEvent = () => {

  
  return (
    <div className=' relative text-white w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center  mt-[100px]   p-5 '>
      <div className=" absolute left-0 top-0">
        
        <ParticleBackground />
        </div>
      <Eventcard image={"/QuizMaster.jpg"} title={"Quiz Master"} id={1} />
      <Eventcard image={"/Bug.jpg"} title={"Bug Busters"} id={2} />
      <Eventcard image={"/posterpresent.webp"} title={"Design Dynmo"} id={3} />
      <Eventcard image={"/ideajams.webp"} title={"Idea Jams"} id={4} />
      <Eventcard image={"/Paperpresent.jpg"} title={"Paper Presentation"} id={5} />
      <Eventcard image={"/ideathon.webp"} title={"Ideathon"} id={6} />
    </div>
  );
};

export default TechnicalEvent;
