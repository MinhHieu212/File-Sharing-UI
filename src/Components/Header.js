import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { MainLogo, UserIcon } from "../Icons/Icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header flex items-center justify-between px-[50px] mt-[25px] mb-[35px]">
      <div className="systemName flex items-center justify-center">
        <MainLogo></MainLogo>
        <h1 className="font-bold text-[34px] text-[#66FCF1] ml-4">
          File-Sharing
        </h1>
      </div>
      <div className="w-[300px] h-[60px] flex items-center justify-center gap-2 text-[24px] font-bold text-[#66FCF1] ">
        <span
          htmlFor="gui"
          onClick={() => {
            navigate("/UserGui");
          }}
          className="cursor-pointer  hover:text-[gray] transition-all"
        >
          GUI
        </span>
        <span
          htmlFor="terminal"
          className="ml-4 cursor-pointer  hover:text-[gray] transition-all"
          onClick={() => {
            navigate("/UserTerminal");
          }}
        >
          TERMINAL
        </span>
      </div>
      <div className="userName flex items-center justify-center cursor-pointer ">
        <UserIcon></UserIcon>
        <Popover placement="bottom">
          <PopoverHandler>
            <Button>
              <span className="font-semibold text-[24px] ml-4 text-[#66FCF1]">
                Nguyễn An Khang
              </span>
            </Button>
          </PopoverHandler>
          <PopoverContent className="bg-transparent -translate-y-5 border-none">
            <div className="w-[250px] bg-[#1F2333] shadow-lg shadow-cyan-500/50 rounded-[5px] p-3 m-0">
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
  );
};

export default Header;
