import React from "react";
import Maniamge from "../../assets/images/profile.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";

const Messageingbody = () => {
  return (
    <div className="w-full border-r border-[#ddd] h-full ">
      <div className="Title h-[70px] border-[#ddd] border-b flex items-center justify-between px-8">
        <div className="flex w-1/2 items-center justify-between">
          <div className="w-[40px]">
            <img
              className="w-[40px] h-[40px] overflow-hidden block rounded-full"
              src={Maniamge}
              alt=""
            />
          </div>
          <div className="w-[calc(100%_-_49px)] font-semibold ">
            Siam Hossen
          </div>
        </div>
        <div className="flex gap-2">
          <IoCallOutline className="text-xl text-[#555] bg-[#f5f5f5] w-9 h-9 p-2 rounded-full" />
          <BsThreeDots className="text-xl text-[#555] bg-[#f5f5f5] w-9 h-9 p-2 rounded-full" />
        </div>
      </div>
      {/* Message Title Bar section  */}
      <div className="Messages  h-[calc(100%_-_140px)] border-b border-b-[#ddd] px-8 pt-8 overflow-y-scroll">
        {/* Message Area  */}
        <div className="  flex flex-col items-end mb-10 ">
          <div className="Id flex items-center flex-row-reverse gap-2">
            <div className="image w-7">
              <img
                className="w-7 h-7 rounded-full overflow-hidden"
                src={Maniamge}
                alt=""
              />
            </div>
            <div className="text-sm font-semibold">Siam Hosen</div>
            <span className="text-sm text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#2b60d1] text-white px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
            dignissimos, eaque ipsa alias voluptas.
          </p>
          <p className="bg-[#2b60d1] text-white px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur?
          </p>
        </div>
        {/* end message  */}
        <div className="  flex flex-col items-start mb-10 ">
          <div className="Id flex items-center flex-row gap-2">
            <div className="image w-7">
              <img
                className="w-7 h-7 rounded-full overflow-hidden"
                src={Maniamge}
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-sm text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#f5f5f5] text-[#333] px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
            dignissimos, eaque ipsa alias voluptas.
          </p>
          <p className="bg-[#f5f5f5] text-[#333] px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur?
          </p>
        </div>
        <div className="  flex flex-col items-end  mb-10">
          <div className="Id flex items-center flex-row-reverse gap-2">
            <div className="image w-7">
              <img
                className="w-7 h-7 rounded-full overflow-hidden"
                src={Maniamge}
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-sm text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#2b60d1] text-white px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
            dignissimos, eaque ipsa alias voluptas.
          </p>
          <p className="bg-[#2b60d1] text-white px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur?
          </p>
        </div>
        {/* end message  */}
        {/* end message  */}
        <div className="  flex flex-col items-start mb-10 ">
          <div className="Id flex items-center flex-row gap-2">
            <div className="image w-7">
              <img
                className="w-7 h-7 rounded-full overflow-hidden"
                src={Maniamge}
                alt=""
              />
            </div>
            <div className="text-sm font-medium">Siam Hosen</div>
            <span className="text-sm text-[#888]">7 july 2012</span>
          </div>
          <p className="bg-[#f5f5f5] text-[#333] px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
            dignissimos, eaque ipsa alias voluptas.
          </p>
          <p className="bg-[#f5f5f5] text-[#333] px-5 py-4 w-fit max-w-4/6 rounded-md mt-2">
            Lorem ipsum dolor sit amet consectetur?
          </p>
        </div>
        {/* End Area  */}
      </div>
      {/* Message Status Section  */}
      <div className="MessageBox px-8 h-[70px] flex items-center">
        <form
          className="w-full flex items-center justify-between bg-[#f5f5f5] px-6 py-3 rounded-md"
          action=""
        >
          <input
            type="text"
            className="w-5/6"
            placeholder="Type your Message..."
          />
          <div>
            <button>
              <LuSendHorizontal />
            </button>
          </div>
        </form>
      </div>
      {/* Message Typing Box Section  */}
    </div>
  );
};

export default Messageingbody;
