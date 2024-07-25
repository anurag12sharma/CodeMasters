import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex lg:flex-row flex-col justify-between items-center text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          CodeMasters
        </h1>
        <p className="py-4">
          Kickstart Your Coding Expedition with CodeMasters.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between gap-9 mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Quick Links</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Home</li>
            <li className="py-2 text-sm cursor-pointer">Courses</li>
            <li className="py-2 text-sm cursor-pointer">DevChallenge</li>
            <li className="py-2 text-sm cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Jobs</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">GET IN TOUCH</h6>
          <ul className="flex justify-center items-center gap-2">
            <FaEnvelope size={15} />
            <li className="py-1 text-sm cursor-pointer">
              support@CodeMasters.in
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
