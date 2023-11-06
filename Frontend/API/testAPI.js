const axios = require("axios");

const apiUrl = "http://localhost:8080/fetch"; // Địa chỉ của API

const postData = {
  clientIp: "172.16.2.232",
  port: 3000,
  fileName: "text.txt",
};

axios
  .post(apiUrl, postData)
  .then((response) => {
    // Xử lý dữ liệu trả về từ API nếu cần
    // console.log("Dữ liệu nhận được từ API:", response.data);
    console.log("thanh cong");
  })
  .catch((error) => {
    // Xử lý lỗi (nếu có) khi gửi yêu cầu đến API
    // console.error("Lỗi khi gửi yêu cầu POST:", error);
    console.log("that bai");
  });
