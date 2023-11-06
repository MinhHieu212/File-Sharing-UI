import ServerAPI from "./ServerAPI";

const HostnameAPI = {
  getListHostname() {
    const path = "hostname";

    return ServerAPI.get(path);
  },

  addHostname(data) {
    const path = "hostname";

    return ServerAPI.post(path, data);
  },
};

export default HostnameAPI;
