import BaseServerApi from "./BaseServerApi";

const ServerServiceApi = {
  getListFile() {
    const path = "/api/all-current-files";
    return BaseServerApi.get(path);
  },

  uploadFileInfo(FileInfo) {
    const path = "/api/list-file-of-a-host";
    // console.log(JSON.stringify(FileInfo));
    return BaseServerApi.put(path, JSON.stringify(FileInfo));
  },

  register(data) {
    const path = "/api/register";
    // console.log(JSON.stringify(data));
    return BaseServerApi.post(path, JSON.stringify(data));
  },

  login(data) {
    const path = "/api/login";
    // console.log(JSON.stringify(data));
    return BaseServerApi.post(path, JSON.stringify(data));
  },

  ping(command) {
    const path = `/hostname${command}`;

    return BaseServerApi.get(path);
  },

  discover(command) {
    const path = `/hostname${command}`;

    return BaseServerApi.get(path);
  },
};

export default ServerServiceApi;
