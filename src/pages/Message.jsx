import React from "react";
import Messageleft from "../components/message/Messageleft";
import Messageingbody from "../components/message/Messageingbody";
import Activeinformation from "../components/message/Activeinformation";

const Message = () => {
  return (
    <div className=" w-full h-full flex">
      <Messageleft />
      <Messageingbody />
      <Activeinformation />
    </div>
  );
};

export default Message;
