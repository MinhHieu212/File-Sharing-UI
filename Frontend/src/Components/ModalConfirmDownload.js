import React, { useState } from "react";
import CenterModal from "./CenterModal";
import createNode from "../p2p/src/index";

const ModalConfirmDownLoad = ({ children, message }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const node = createNode();
  const ip = "172.16.0.232";
  const port = 4000;

  const handleConfirmDownload = () => {
    setOpenModal(false);
    console.log("Bat dau tai file ");
    node.listen(3000, 3001, () => {
      node.connect(ip, Number(port), () => {
        console.log('Connection to ${ip} established.');
      });
    });
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="w-[350px] md:w-[400px] overflow-hidden rounded-lg">
          <div className="header bg-[#252A33] text-white text-[24px] font-bold flex items-center justify-center h-[60px] w-full">
            XÁC NHẬN
          </div>
          <div className="flex items-center justify-center text-[20px] font-semibold h-[100px] ">
            {message}
          </div>
          <div className="flex items-center gap-3 justify-center w-full py-2">
            <button
              className="bg-[#a93e3e] p-3 w-[40%] block rounded-lg text-[20px] font-semibold text-white"
              onClick={handleClose}
            >
              Hủy bỏ
            </button>
            <button
              className="bg-[#4a4a8e] p-3 w-[40%] block rounded-lg text-[20px] font-semibold text-white"
              onClick={handleConfirmDownload}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ModalConfirmDownLoad;