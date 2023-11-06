const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
<<<<<<< HEAD
const path = require("path");

async function login(req, res) {
=======
const path=require("path")
// khi login vào thì cần phải vào db thay cái ip address nhé
async function login(req,res){
>>>>>>> 53848301ce709ca32a059b84a8ded12d56e20c77
  console.log(req.body);
  const hostname = req.body.hostname;
  const password = req.body.password;
  console.log(hostname, " ", password);
  const data = await readFile(); //not include client
  for (var i = 0; i < data.length; i++) {
    if (data[i].hostname == hostname) {
      if (data[i].password == password) {
        return res.status(200).send("Login Success !");
      }
    }
  }
  return res.status(401).send("Login Failed, Unauthorized !");
}
module.exports = login;
