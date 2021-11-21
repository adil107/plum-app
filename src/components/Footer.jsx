import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_1 py-16">
        <div className="max-w-7xl px-5 sm:px-16 grid grid-cols-3 gap-8">
          <div className="col-span-3 lg:col-span-1 ">
            <h1>ABOUT US</h1>
            <p className="">
              Donec pulvinar quam dolor, vitae ligulas elite pretium. Phasellus
              vitae turpis vel. Commod ullamcorper facilisis. Volutpat eu nisi
              sed ac orci nulla. Vitae ligula felis et quam.
            </p>
          </div>
          <div className="col-span-3 lg:col-span-2 grid lg:grid-cols-4 grid-cols-1 gap-5 ">
            <div>
              <h1>COMPANY</h1>
              <ul>
                <NavLink to="#">
                  <li>FAQs</li>
                </NavLink>
                <NavLink to="#">
                  <li>Terms of use</li>
                </NavLink>
                <NavLink to="#">
                  <li>Privacy Policy</li>
                </NavLink>
              </ul>
            </div>
            <div>
              <h1>COMPANY</h1>
              <ul>
                <NavLink to="#">
                  <li>FAQs</li>
                </NavLink>
                <NavLink to="#">
                  <li>Terms of use</li>
                </NavLink>
                <NavLink to="#">
                  <li>Privacy Policy</li>
                </NavLink>
              </ul>
            </div>

            <div>
              <h1>COMPANY</h1>
              <ul>
                <NavLink to="#">
                  <li>FAQs</li>
                </NavLink>
                <NavLink to="#">
                  <li>Terms of use</li>
                </NavLink>
                <NavLink to="#">
                  <li>Privacy Policy</li>
                </NavLink>
              </ul>
            </div>

            <div>
              <h1>COMPANY</h1>
              <ul>
                <NavLink to="#">
                  <li>FAQs</li>
                </NavLink>
                <NavLink to="#">
                  <li>Terms of use</li>
                </NavLink>
                <NavLink to="#">
                  <li>Privacy Policy</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_2 max-w-7xl px-5 sm:px-16 flex lg:flex-row lg:justify-between flex-col items-center py-5 ">
        <div>
          <p>
            © 2017{" "}
            <a
              href="#top"
              className="transition-all duration-300 hover:text-black"
            >
              {" "}
              Graphicfort,
            </a>{" "}
            all rights reserved.
          </p>
        </div>
        <div className="flex ">
          <div className="iconDiv transition-all duration-500 w-7 h-7 rounded-full CenterFlex flex-col  relative overflow-hidden">
            <FaFacebookF className="Face_1 transition-all duration-300 text-gray-600 text-xs relative" />
            <FaFacebookF className=" Face_2 transition-all duration-300  absolute  font-bold text-xs transform -bottom-4 text-white" />
          </div>

          <div className="iconDiv G_Plus transition-all duration-500 w-7 h-7 rounded-full CenterFlex flex-col  relative overflow-hidden">
            <FaGooglePlusG className="Face_1 transition-all duration-300 text-gray-600 text-sm relative" />
            <FaGooglePlusG className=" Face_2 transition-all duration-300  absolute  font-bold text-sm transform -bottom-4 text-white" />
          </div>

          <div className="iconDiv Twitter transition-all duration-500 w-7 h-7 rounded-full CenterFlex flex-col  relative overflow-hidden">
            <FaTwitter className="Face_1 transition-all duration-300 text-gray-600 text-xs relative" />
            <FaTwitter className=" Face_2 transition-all duration-300  absolute  font-bold text-xs transform -bottom-4 text-white" />
          </div>

          <div className="iconDiv Youtube transition-all duration-500 w-7 h-7 rounded-full CenterFlex flex-col  relative overflow-hidden">
            <FaYoutube className="Face_1 transition-all duration-300 text-gray-600 text-xs relative" />
            <FaYoutube className=" Face_2 transition-all duration-300  absolute  font-bold text-xs transform -bottom-4 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
