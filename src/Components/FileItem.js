import React from "react";
import { DownloadIcon, RemoveIcon } from "../Icons/Icons";

export const CommunityFileItem = ({ fileName }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center hover:bg-gray-400 transition-all">
      <span> {fileName} </span> <DownloadIcon></DownloadIcon>
    </div>
  );
};

export const RepoFileItem = ({ fileName }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center  hover:bg-gray-400 transition-all">
      <span> {fileName} </span> <RemoveIcon></RemoveIcon>
    </div>
  );
};
