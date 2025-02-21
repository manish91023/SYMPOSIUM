import { useState, useEffect } from "react";

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex max-w-md flex-col items-center p-2 md:p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="md:text-2xl orbitron mb-4 ">Time teft to register event</h2>
      <div className="flex  md:space-x-4 text-center">
        <TimeBlock label="Days" value={timeLeft.days} />
        <TimeBlock label="Hours" value={timeLeft.hours} />
        <TimeBlock label="Minutes" value={timeLeft.minutes} />
        <TimeBlock label="Seconds" value={timeLeft.seconds} />
      </div>
    </div>
  );
};

const TimeBlock = ({ label, value }) => (
  <div className="flex flex-col items-center bg-gray-900 px-1 py-0.5 md:px-4 md:py-2 rounded-lg">
    <span className="text-xs md:text-3xl font-bold">{value}</span>
    <span className=" text-xs md:text-sm uppercase text-gray-400">{label}</span>
  </div>
);

export default CountDown;
