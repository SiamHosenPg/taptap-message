import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Profileimage from "../../assets/images/profile.jpeg";

const Topnavigation = () => {
  return (
    <div>
      <div className="border-b border-b-[#ddd] h-[70px]  flex items-center justify-between w-full  ">
        <div className=" w-[300px] border-r border-r-[#ddd] h-full flex items-center">
          <h3 className=" uppercase ">
            Taptap.<span className="text-sm text-[#888]">go</span>
          </h3>
        </div>

        <div className=" w-[calc(100%_-_700px)]  h-full flex items-center pl-8 ">
          <CiSearch className="text-2xl" />
          <form action="">
            <input
              className="px-3 py-1 w-[400px]"
              type="text"
              placeholder=" Search your friends..."
            />
          </form>
        </div>

        {/* search box closs  */}

        <div className="  w-[400px]  h-full flex items-center justify-end gap-2 text-xl">
          <div>
            <TbMessageCircle />
            <div className="w-[10px] h-[10px] bg-emerald-400 rounded-full  border-white border-[2px] absolute mt-[-20px] ml-[14px]"></div>
          </div>
          <div className="mr-4 ml-1">
            <IoReload />
            <div className="w-[10px] h-[10px] bg-emerald-400 rounded-full  border-white border-[2px] absolute mt-[-20px] ml-[14px]"></div>
          </div>
          <div className="profile flex gap-2 items-center">
            <div className="img w-10 h-10 overflow-hidden border border-[#ddd] rounded-full">
              <img className="h-full" src={Profileimage} alt="" />
            </div>
            <h4>Siam Hosen</h4>
          </div>
          <FaCaretDown className="text-[#9b9b9b] text-lg" />
        </div>
        {/* Clossing Right Cotent  */}
      </div>
    </div>
  );
};

export default Topnavigation;
