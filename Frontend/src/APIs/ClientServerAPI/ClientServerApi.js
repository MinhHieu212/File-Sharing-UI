import axios from "axios";

const ClientServerApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application.json",
  },
});

export default ClientServerApi;
