import React, { useState } from "react";
import CenterModal from "./CenterModal";
import RepositoryApi from "../APIs/P2pAPI/RepositoryApi";
import ServerServiceApi from "../APIs/ServerAPI/ServerServiceApi";

const ModalConfirmUpload = ({
  children,
  message,
  file,
  handleReloadSystem,
  handleReloadRepo,
  hostName,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleConfirm = async () => {
    const formData = new FormData();
    formData.append("file", file);
    // them file moi vao repo cua client
    console.log(file);
    const rep = await RepositoryApi.addFile(formData);
    console.log(rep);

    // call api thong bao den server
    const newListFile = await RepositoryApi.getList()?.data?.files;

    const fileInfo = {
      hostname: hostName,
      file: newListFile,
    };

    console.log(fileInfo);

    await ServerServiceApi.uploadFileInfo(fileInfo);

    setOpenModal(false);
    // reload lại danh sach trong repository
    await handleReloadRepo();
    // reload lại danh sach trong comunity
    await handleReloadSystem();
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
              onClick={handleConfirm}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default ModalConfirmUpload;
