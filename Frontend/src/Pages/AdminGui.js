import React from "react";
import { SearchIcon } from "../Icons/Icons";
import ItemList from "../Components/ItemList";
import Header from "../Components/Header";

const hostnameList = ["MINHHIEU", "MINHMINH", "HACKER", "H6_P304", "HCMUT"];
const fileOfHostname = ["giaitich.pdf", "hopdong.pdf", "report.docx"];

const AdminGui = () => {
  return (
    <div className="homeContainter w-[1200px] h-[900px] rounded-lg bg-[#5A6465] shadow-lg shadow-cyan-500/50">
      <Header></Header>
      <div className="Maincontent w-[1100px] h-[750px] mx-auto flex items-start justify-between">
        <div className="w-[49%] h-[100%] bg-[#252A33] rounded-lg">
          <h1 className="text-[26px] text-[#66FCF1] text-center font-bold mt-2">
            Hostname list
          </h1>
          <div className="Search px-3 text-[25px] bg-white rounded-md w-[90%] h-[60px] flex items-center justify-between mx-auto mt-4 overflow-hidden">
            <input
              type="text"
              placeholder="Search hostname"
              className="w-[90%] h-full text-[24px] outline-none px-3"
            />
            <SearchIcon></SearchIcon>
          </div>
          <div className="Search p-4 text-[25px] bg-white rounded-lg w-[90%] h-[78%] mt-5 mx-auto overflow-y-auto">
            {hostnameList.map((hostName, index) => (
              <ItemList infomation={hostName} key={index}></ItemList>
            ))}
          </div>
        </div>
        <div className="w-[49%] h-[100%]">
          <div className="w-[100%] h-[150px] bg-[#252A33] rounded-lg pt-2">
            <div className="text-[26px] text-[#66FCF1]  font-bold flex items-center justify-between px-[25px]">
              <span className=""> Ping hostname</span>
              <span className="">
                Status: <span className="text-[yellow] pl-3"> OFF </span>
              </span>
            </div>
            <div className="flex items-center mt-4 justify-between w-[90%] mx-auto text-[24px]">
              <input
                type="text"
                placeholder="Hostname"
                className="w-[70%] h-[60px] px-4 rounded-lg"
              />
              <button className="w-[28%] h-[60px] bg-[#45A29E] px-4 rounded-lg text-[#08005F] flex items-center justify-center font-bold">
                PING
              </button>
            </div>
          </div>
          <div className="w-[100%] mt-5 h-[150px] bg-[#252A33] rounded-lg pt-2">
            <h1 className="text-[26px] text-[#66FCF1] text-center font-bold ">
              Discover hostname
            </h1>
            <div className="flex items-center mt-4 justify-between w-[90%] mx-auto text-[24px]">
              <input
                type="text"
                placeholder="Hostname"
                className="w-[70%] h-[60px] px-4 rounded-lg"
              />
              <button className="w-[28%] h-[60px] bg-[#45A29E] px-4 rounded-lg text-[#08005F] flex items-center justify-center font-bold">
                DISCOVER
              </button>
            </div>
          </div>
          <div className="w-[100%] mt-5 py-5 pt-2 h-[auto] bg-[#252A33] rounded-lg">
            <p className="text-bold text-[20px] text-center text-white">
              Files Shared from [Host Name]
            </p>
            <div className="w-[90%] mx-auto h-[340px] bg-white rounded-lg mt-3 py-3 overflow-y-auto">
              {fileOfHostname.map((fileName, index) => (
                <ItemList infomation={fileName} key={index}></ItemList>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGui;
