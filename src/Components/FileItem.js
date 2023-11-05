import React from "react";
import { DownloadIcon, RemoveIcon } from "../Icons/Icons";
import Modal from "./Modal";

export const CommunityFileItem = ({ fileName }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center hover:bg-gray-400 transition-all">
      <span> {fileName} </span>
      <Modal message={"Confirm dowload this [file]"}>
        <DownloadIcon></DownloadIcon>
      </Modal>
    </div>
  );
};

export const RepoFileItem = ({ fileName }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center  hover:bg-gray-400 transition-all">
      <span> {fileName} </span>
      <Modal message={"Confirm delete this [file]"}>
        <RemoveIcon></RemoveIcon>
      </Modal>
    </div>
  );
};
