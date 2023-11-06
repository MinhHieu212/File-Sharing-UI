const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
const fs = require("fs");
const path = require("path");

async function getCurrentFiles(req, res) {
  var currentFiles = [];

    //không xét trường hợp cùng tên , mặc định là các client không có file cùng tên cho đơn giản
  const data = await readFile(); //not include client
  for (var i = 0; i < data.length; i++) {
    if (data[i]?.isActive) {
        if (data[i].file.length>0)
        {
            currentFiles=currentFiles.concat(data[i].file)
        }
    }
  }
  res.send ({currentFiles})
}
module.exports = getCurrentFiles;
