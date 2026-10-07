import React from "react";
import Logo from "../../assets/flora-logo.svg";
import { FaDownload } from "react-icons/fa";
import { PiDownloadFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-5 px-6 items-center border-b border-gray-200">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="" />
        <h1 className="text-4xl font-bold">Flora</h1>
      </div>

      <ul className="flex gap-3 items-center">
        <li>Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>

      <button className="flex items-center gap-4 bg-black text-white py-3 px-6 rounded-full">
        Download Now{" "}
        <span className="flex bg-lime-300 p-3 rounded-full text-black text-xl">
          <PiDownloadFill />
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
