import React from "react";
import { DownloadIcon, RemoveIcon } from "../Icons/Icons";
import ModalConfirmDownLoad from "./ModalConfirmDownload";
import ModalConfirmDelete from "./ModalConfirmDelete";

export const CommunityFileItem = ({ fileName, hostIp }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center hover:bg-gray-400 transition-all ">
      <span className="w-[95%] truncate">{fileName}</span>
      <ModalConfirmDownLoad
        message={`Confirm download this ${fileName}`}
        hostIp={hostIp}
        fileName={fileName}
      >
        <DownloadIcon />
      </ModalConfirmDownLoad>
    </div>
  );
};

export const RepoFileItem = ({ fileName }) => {
  return (
    <div className="w-[90%] p-2 pr-4 bg-[#D9D9D9] border-b-4 border-black rounded-md mx-auto text-[24px] my-2 font-semibold text flex justify-between items-center hover:bg-gray-400 transition-all">
      <span className="w-[95%] truncate">{fileName}</span>
      <ModalConfirmDelete message={`Confirm delete this ${fileName}`}>
        <RemoveIcon />
      </ModalConfirmDelete>
    </div>
  );
};
