import axios from "axios";

const BaseServerApi = axios.create({
  baseURL: "http://172.16.1.100:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseServerApi;
