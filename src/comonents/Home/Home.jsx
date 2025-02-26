import React from 'react';
import pushkar from "../../assets/pushkar.jpg";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 gap-x-10">
      <div className="md:w-2/4 md:pt-10 space-y-6">  {/* Added space-y-6 for spacing */}
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          Hello, I m Pushkar!!
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I am currently a second year Computer Engineering student at Pune Institute of Computer Technology, Pune.
          I like exploring various places, travelling
        </p>
        <button className="mt-2 md:mt-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div className="flex justify-center items-center w-1/3 ml-10">
        <img className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover" src={pushkar} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
