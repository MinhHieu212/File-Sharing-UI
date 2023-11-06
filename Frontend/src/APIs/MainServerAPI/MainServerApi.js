import axios from "axios";

const MainServerApi = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application.json",
  },
});

export default MainServerApi;
