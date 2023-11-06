import axios from "axios";

const BaseServerApi = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseServerApi;
