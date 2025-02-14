export default function Card({eventDesc,eventType,eventUrl}) {
    return (
      <div className="relative flex flex-col gap-4 p-4 w-76 bg-gray-900 bg-gradient-to-b from-gray-900 via-purple-700 to-pink-500 rounded-xl shadow-inner">
        <div className="absolute w-full h-full bg-gradient-to-b from-white/10 via-gray-400/50 to-transparent rounded-xl -z-10"></div>
        <div className="text-white text-lg font-bold">{eventType}</div>
        <p className="text-xs text-gray-300 w-2/3">Perfect event for your Matching profile </p>
        <hr className="w-full h-px bg-gray-700 border-none" />
        <ul className="flex flex-col gap-2">
          {eventDesc.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-white">
              <span className="flex justify-center items-center w-4 h-4 bg-purple-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a href={eventUrl} className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-500 text-center text-white rounded-full shadow-md hover:opacity-90 transition-all">View Details</a>
      </div>
    );
  }
  