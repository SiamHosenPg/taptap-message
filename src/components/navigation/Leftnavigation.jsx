import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdGroups2 } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";

const Leftnavigation = () => {
  return (
    <div className="border-r w-full  h-[calc(100vh_-_70px)] border-[#ddd] px-5">
      <div className=" pt-12">
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <GoHomeFill className="text-lg mt-[-2px]" />
          <span>Dashboard</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <MdGroups2 className="text-lg mt-[-2px]" />
          <span>Group</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <FaUserFriends className="text-lg mt-[-2px]" />
          <span>Friends</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <MdGroupAdd className="text-lg mt-[-2px]" />
          <span>Add Member</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <GoHomeFill className="text-lg mt-[-2px]" />
          <span>Dashboard</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <GoHomeFill className="text-lg mt-[-2px]" />
          <span>Dashboard</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <MdGroups2 className="text-lg mt-[-2px]" />
          <span>Group</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <FaUserFriends className="text-lg mt-[-2px]" />
          <span>Friends</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <MdGroupAdd className="text-lg mt-[-2px]" />
          <span>Add Member</span>
        </div>
        <div className=" font-semibold flex items-center gap-2 bg-white px-4 py-3 rounded-md mt-2 hover:bg-blue-50">
          <div></div>
          <GoHomeFill className="text-lg mt-[-2px]" />
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Leftnavigation;
