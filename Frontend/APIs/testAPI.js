const axios = require("axios");

const apiUrl = "http://localhost:8080/fetch";

const postData = {
  clientIp: "172.16.2.232",
  port: 3000,
  fileName: "text.txt",
};

axios
  .post(apiUrl, postData)
  .then((response) => {
    console.log("thanh cong");
  })
  .catch((error) => {
    console.log("that bai ");
  });
