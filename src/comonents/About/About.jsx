import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                  I’m a Frontend Developer passionate about crafting responsive, user-friendly, and visually appealing web experiences. I specialize in React.js, Tailwind CSS, and JavaScript, focusing on performance, accessibility, and seamless UI/UX.  
                  <br />
                  💻 <strong>Tech Stack:</strong> React.js | Next.js | Tailwind CSS | JavaScript | TypeScript | Git  
                  🎨 <strong>Skills:</strong> Responsive Design | API Integration | UI/UX | Performance Optimization
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🐍 Python Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                  I’m a Python Developer with a focus on building efficient, scalable, and readable code.
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  💻 C++ Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                  I’m a C++ Developer with expertise in high-performance applications, competitive programming, and system-level development. I focus on writing efficient and optimized code for software development, game engines, and embedded systems.  
                  <br />
                  💻 <strong>Tech Stack:</strong> C++ | STL | Algorithms | Data Structures
                </p>
              </span>
            </div>
            
            <div className="flex gap-3 py-10">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  🌐 JavaScript Developer
                </h1>
                <p className="mt-2 text-sm md:text-md leading-tight">
                  I’m a JavaScript Developer focused on frontend and full-stack development. I build interactive, fast, and modern web applications using frameworks like React.js, Node.js, and Express.js.  
                  <br />
                  💻 <strong>Tech Stack:</strong> JavaScript | React.js | Node.js | Express.js | MongoDB | TypeScript  
                  ⚡ <strong>Skills:</strong> Web Development | Frontend Design | API Development | Performance Optimization
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
