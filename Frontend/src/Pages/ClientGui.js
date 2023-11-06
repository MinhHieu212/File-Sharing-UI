import React, { useState } from "react";
import { SearchIcon, UploadIcon } from "../Icons/Icons";
import { CommunityFileItem, RepoFileItem } from "../Components/FileItem";
import Header from "../Components/Header";
import ModalConfirmUpload from "../Components/ModalConfirmUpload";

const FileOnSystem = [
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "hopdong.pdf",
  "report.docx",
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "hopdong.pdf",
  "report.docx",
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "hopdong.pdf",
  "report.docx",
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
];

const FileOnRepo = [
  "giaitich.pdf",
  "hopdong.pdf",
  "report.docx",
  "VoNhat.docx",
];

const ClientGui = () => {
  const [file, setFile] = useState();

  return (
    <div className="homeContainter w-[1200px] h-[900px] rounded-lg bg-[#5A6465] shadow-lg shadow-cyan-500/50">
      <Header></Header>
      <div className="Maincontent w-[1100px] h-[750px] mx-auto flex items-center justify-between">
        <div className="w-[49%] h-[100%] bg-[#252A33] rounded-lg">
          <h1 className="text-[26px] text-[#66FCF1] text-center font-bold mt-2">
            Community Files
          </h1>
          <div className="Search px-3 text-[25px] bg-white rounded-md w-[90%] h-[60px] flex items-center justify-between mx-auto mt-4 overflow-hidden">
            <input
              type="text"
              placeholder="Search file"
              className="w-[90%] h-full text-[24px] outline-none px-3"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="Search p-4 text-[25px] bg-white rounded-lg w-[90%] h-[78%] mt-5 mx-auto overflow-y-auto">
            {FileOnSystem.map((fileName, index) => (
              <CommunityFileItem
                fileName={fileName}
                key={index}
              ></CommunityFileItem>
            ))}
          </div>
        </div>
        <div className="w-[49%] h-[100%] bg-[#252A33] rounded-lg">
          <h1 className="text-[26px] text-[#66FCF1] text-center font-bold mt-2">
            Repository
          </h1>
          <div className="Search text-[25px] bg-white rounded-md w-[90%] h-[60px] flex items-center justify-between mx-auto mt-4 overflow-hidden px-4">
            <input
              id="newFile"
              type="file"
              className="rounded-md mx-2 font-semibold text-[blue]"
              onChange={(event) => {
                const selectedFile = event.target.files[0];
                setFile(selectedFile);
                console.log(selectedFile.name);
              }}
            />
            <ModalConfirmUpload message={`Confirm upload File`} file={file}>
              <UploadIcon></UploadIcon>
            </ModalConfirmUpload>
          </div>
          <div className="Search p-4 text-[25px] bg-white rounded-lg w-[90%] h-[78%] mt-5 mx-auto  overflow-y-auto">
            {FileOnRepo.map((fileName, index) => (
              <RepoFileItem fileName={fileName} key={index}></RepoFileItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGui;
