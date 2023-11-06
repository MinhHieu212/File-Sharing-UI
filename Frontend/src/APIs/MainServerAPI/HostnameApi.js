import MainServerApi from "./MainServerApi";

const HostnameApi = {
  getList() {
    const path = "/hostname";

    return MainServerApi.get(path);
  },

  register(data) {
    const path = "/api/register";

    return MainServerApi.post(path, data);
  },

  login(data) {
    const path = "/api/login";

    return MainServerApi.post(path, data);
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
