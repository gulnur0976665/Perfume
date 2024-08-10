import React from "react";
import err from "../../assets/error1.webp";
const ErrorPages = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-[40px] flex items-center justify-center ">
          <img src={err} alt="" className="w-[600px] max-[1200px]:w-[530px] max-lg:w-[550px]  max-sm:w-[400px]"/>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
