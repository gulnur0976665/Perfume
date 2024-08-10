import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="my-[40px]">
      <div className="container">
        <div className="flex items-start justify-between max-[446px]:flex-col max-[446px]:items-center max-[446px]:gap-10">
          <div className="flex items-start flex-col  gap-[3px] max-sm:gap-2">
            <h1 className="text-white text-[20px] max-sm:text-[16px] font-bold">
              OFFERS AND TRENDS
            </h1>
            <h2 className="text-white text-[30px] max-sm:text-[20px] font-semibold">
              Newsletter Application
            </h2>
            <p className="text-white text-[13px] max-sm:text-[10px]  font-medium">
              Enter your email address and let us notify you <br />
              about news and discounts...
            </p>
            <div className="flex items-center max-[446px]:items-center max-sm:flex-col max-sm:items-start gap-3 max-sm:gap-4">
              <h1 className="bg-[hsla(210,1%,98%,1)] w-[385px] max-lg:w-[230px] h-[40px] max-lg:h-[34px] rounded-md"></h1>
              <button className="w-[141px] h-[40px] max-lg:h-[34px] max-lg:w-[120px] bg-[hsla(210,8%,74%,1)] rounded-md font-bold">
                SIGN UP
              </button>
            </div>
          </div>
          <div className="flex items-end flex-col gap-[3px] max-[446px]:items-center max-sm:gap-2">
            <h1 className="text-white font-medium max-sm:text-[16px]">STAY UP TO DATE</h1>
            <h1 className="text-white font-bold text-[28px]  max-sm:text-[20px]">Follow Us</h1>
            <p className="text-white text-[13px]  max-sm:text-[9px] ">
              Become part of our friends on social networks and
              <br />
              find out first about the discounts and novelties that
              <br />
              we announce....
            </p>
            <div className="flex items-center gap-20 ">
              <a className="text-white text-[40px] max-lg:text-[30px]">
                <IoLogoInstagram />
              </a>
              <a className="text-white text-[40px] max-lg:text-[30px]">
                <MdOutlineFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
