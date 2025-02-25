import React from "react";
import { FaRegFile } from "react-icons/fa6";
import Maniamge from "../../assets/images/profile.jpeg";

const Activeinformation = () => {
  return (
    <div className="w-full min-w-[300px] max-w-[400px] flex flex-col items-center pt-14 px-8">
      <div className="image w-[100px] ">
        <img
          className="w-[130px] aspect-square rounded-full"
          src={Maniamge}
          alt=""
        />
      </div>
      <h4 className="mt-3">Siam Hsoen</h4>
      <h5 className="text-[#555]">Front-End Developer</h5>
      <div className="w-full">
        <div className=" text-sm font-semibold mt-10 border-b border-b-[#ddd] py-2 flex gap-2 items-center">
          <FaRegFile className="text-lg text-blue-600" /> Media File
        </div>
        <div className=" grid grid-cols-4 gap-2 pt-2">
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
          <div className=" aspect-square bg-[#f6f6f6] "></div>
        </div>
      </div>
    </div>
  );
};

export default Activeinformation;
