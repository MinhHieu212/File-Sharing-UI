import React, { useEffect, useState } from "react";
import { SearchIcon, UploadIcon } from "../Icons/Icons";
import { CommunityFileItem, RepoFileItem } from "../Components/FileItem";
import Header from "../Components/Header";
import ModalConfirmUpload from "../Components/ModalConfirmUpload";
import RepositoryApi from "../APIs/ClientServerAPI/RepositoryApi";
import HostnameApi from "../APIs/MainServerAPI/HostnameApi";

const ClientGui = () => {
  const [file, setFile] = useState();
  const [fileOnSystem, setFileOnSystem] = useState([
    "giaitich.pdf",
    "hopdong.pdf",
    "report.docx",
  ]);

  const [fileOnRepo, setFileOnRepo] = useState([
    "giaitich.pdf",
    "hopdong.pdf",
    "report.docx",
  ]);

  const fetchDataFromAPI = async () => {
    console.log("repository");
    try {
      const response = await RepositoryApi.getList();
      setFileOnRepo(response.data.files); // Assuming response.data is an array of file names
      console.log(fileOnRepo);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    // Fetch fileOnRepo data from your API
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI2 = async () => {
    try {
      const response = await HostnameApi.getList();
      console.log("all cuerrnet fiel ", response.data.currentFiles);
      setFileOnSystem(response.data.currentFiles);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    // Fetch fileOnRepo data from your API
    fetchDataFromAPI2();
  }, []);

  console.log(fileOnRepo);

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
            {fileOnSystem.map((fileName, index) => (
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
            <ModalConfirmUpload
              message={`Confirm upload File`}
              file={file}
              handleReload={fetchDataFromAPI}
            >
              <UploadIcon></UploadIcon>
            </ModalConfirmUpload>
          </div>
          <div className="Search p-4 text-[25px] bg-white rounded-lg w-[90%] h-[78%] mt-5 mx-auto  overflow-y-auto">
            {fileOnRepo.map((fileName, index) => (
              <RepoFileItem fileName={fileName} key={index}></RepoFileItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGui;
