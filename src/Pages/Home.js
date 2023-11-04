import React from "react";
import TerminalController from "../Components/TerminalController";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { MainLogo, UserIcon } from "../Icons/Icons";

const Home = () => {
  return (
    <div className="homeContainter w-[1200px] h-[900px] rounded-lg bg-[#5A6465] shadow-lg shadow-cyan-500/50">
      <div className="header flex items-center justify-between px-[50px] mt-[25px] mb-[35px]">
        <div className="systemName flex items-center justify-center">
          <MainLogo></MainLogo>
          <h1 className="font-bold text-[34px] text-[#66FCF1] ml-4">
            File-Sharing
          </h1>
        </div>
        <div className="userName flex items-center justify-center ">
          <UserIcon></UserIcon>
          <Popover placement="bottom">
            <PopoverHandler>
              <Button>
                <span className="font-semibold text-[24px] ml-4 text-[#66FCF1]">
                  Nguyễn An Khang
                </span>
              </Button>
            </PopoverHandler>
            <PopoverContent className="mt-[10px] bg-cyan-700 -translate-x-[14px] shadow-xl">
              <div className="w-[250px] bg-[#1F2333] shadow-lg shadow-cyan-500/50 rounded-[5px] p-3">
                <p className=" text-center text-[20px] font-bold  text-white mb-3">
                  Change account?
                </p>
                <Link to="/Login">
                  <button className="p-3 bg-[#66FCF1] w-[80%] mx-auto block rounded-md font-bold text-[20px]">
                    Log out
                  </button>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="terminal w-[1100px] h-[750px] mx-auto">
        <TerminalController></TerminalController>
      </div>
    </div>
  );
};

export default Home;
