const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
const fs = require("fs");
const path = require("path");

async function getCurrentFiles(req, res) {
  var currentFiles = [];

  //không xét trường hợp cùng tên , mặc định là các client không có file cùng tên cho đơn giản
  const data = await readFile(); //not include client
  for (var i = 0; i < data.length; i++) {
    if (data[i]?.isActive) {
      if (data[i].file.length > 0) {
        for(var j=0;j<data[i].file.length;j++)
        {
          const item={
            file: data[i].file[j],
            localIp: data[i].localIp
          }
        currentFiles = currentFiles.concat(item);
        }
      }
    }
  }
  res.status(200).send({ currentFiles });
}
module.exports = getCurrentFiles;
