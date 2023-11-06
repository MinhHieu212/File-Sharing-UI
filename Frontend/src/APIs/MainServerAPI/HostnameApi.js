import MainServerApi from "./MainServerApi";

const HostnameApi = {
  getList() {
    const path = "/api/all-current-files";
    return MainServerApi.get(path);
  },

  register(data) {
    const path = "/api/register";
    console.log(JSON.stringify(data));
    return MainServerApi.post(path, JSON.stringify(data));
  },

  login(data) {
    const path = "/api/login";
    console.log(JSON.stringify(data));
    return MainServerApi.post(path, JSON.stringify(data));
  },

  ping(command) {
    const path = `/hostname${command}`;

    return MainServerApi.get(path);
  },

  discover(command) {
    const path = `/hostname${command}`;

    return MainServerApi.get(path);
  },
};

export default HostnameApi;
