import React from "react";

const HostnameItem = ({ hostname }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center  hover:bg-gray-400 transition-all">
      <span> {hostname} </span>
    </div>
  );
};

export default HostnameItem;
