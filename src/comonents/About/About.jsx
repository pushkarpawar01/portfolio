import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className=" text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <ul className="flex flex-row">
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                  I’m a Frontend Developer passionate about crafting responsive, user-friendly, and visually appealing web experiences. I specialize in React.js, Tailwind CSS, and JavaScript, focusing on performance, accessibility, and seamless UIs.  
                  <br />
                  💻 <strong>Tech Stack:</strong> React.js | Tailwind CSS | JavaScript 
                  🎨 <strong>Skills:</strong> Responsive Design | API Integration | UI | Performance Optimization
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                Backend Developer, with hands-on experience in building scalable backend systems using Node.js, Express.js, and MongoDB.  Focused on performance, security, and clean code architecture.
                <br />
                💻 <strong>Tech Stack:</strong> Node.js | Express.js | MongoDB
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
