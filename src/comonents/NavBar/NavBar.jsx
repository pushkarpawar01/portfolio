import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="fixed bg-black pb-5 top-0 w-full shadow z-50 flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } x-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md p-1 md:p-0 hover:text-gray-400 transition-colors duration-200">About</li>
        </a>
        <a href="#Experience">
          <li className="text-md  p-1 md:p-0 hover:text-gray-400 transition-colors duration-200">Skills</li>
        </a>
        <a href="#Projects">
          <li className="text-md  p-1 md:p-0 hover:text-gray-400 transition-colors duration-200">Projects</li>
        </a>
        <a href="#Contact">
          <li className="text-md  p-1 md:p-0 hover:text-gray-400 transition-colors duration-200">Contact</li>
        </a>
        <a href="https://drive.google.com/drive/u/0/folders/1-YxMI_mBHTHdHLlm-2T2LT_DY_XGCJNZ" target="_blank"
        >
          <li className="text-md  p-1 md:p-0 hover:text-gray-400 transition-colors duration-200">Resume</li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
