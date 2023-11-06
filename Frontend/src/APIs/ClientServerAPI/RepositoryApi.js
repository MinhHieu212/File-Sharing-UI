import ClientServerApi from "./ClientServerApi";

const RepositoryApi = {
  getList() {
    const path = "/hostRepo";

    return ClientServerApi.get(path);
  },

  addFile(data) {
    const path = "/uploadRepo";

    return ClientServerApi.post(path, data);
  },

  deleteFile(data) {
    const path = `/repository/${data}`;

    return ClientServerApi.delete(path);
  },
};

export default RepositoryApi;
