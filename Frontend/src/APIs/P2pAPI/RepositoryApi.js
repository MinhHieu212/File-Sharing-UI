import BaseP2pApi from "./BaseP2pApi";

const RepositoryApi = {
  getList() {
    const path = "/hostRepo";

    return BaseP2pApi.get(path);
  },

  addFile(data) {
    const path = "/uploadRepo";

    return BaseP2pApi.post(path, data);
  },

  fetchFile(FileInfo) {
    const path = `/fetch`;
    console.log(FileInfo);

    return BaseP2pApi.post(path, FileInfo);
  },

  deleteFile(data) {
    const path = `/repository/${data}`;

    return BaseP2pApi.delete(path);
  },
};

export default RepositoryApi;