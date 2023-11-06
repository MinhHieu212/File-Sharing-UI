import ClientAPI from "./ClientAPI";

const RepositoryApi = {
  getAllList() {
    const path = "hostname";

    return ClientAPI.get(path);
  },

  addNewFile(data) {
    const path = "hostname";

    return ClientAPI.post(path, data);
  },
};

export default RepositoryApi;
