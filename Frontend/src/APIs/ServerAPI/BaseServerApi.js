import axios from "axios";

const BaseServerApi = axios.create({
  baseURL: "http://10.230.173.226:5000",  
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseServerApi;
