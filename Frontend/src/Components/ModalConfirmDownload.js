import React, { useState } from "react";
import CenterModal from "./CenterModal";
import RepositoryApi from "../APIs/P2pAPI/RepositoryApi";

const ModalConfirmDownLoad = ({ children, message, hostIp, fileName }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  const fetchParams = {
    clientIp: hostIp,
    clientPort: 3000,
    fileName: fileName,
  };

  // call API fetch file
  const handelConfirm = async () => {
    try {
      const response = await RepositoryApi.fetchFile(fetchParams);
      console.log(response);
    } catch (error) {
      console.error("Error fetching file", error);
    }
    setOpenModal(false);
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
              onClick={handelConfirm}
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
