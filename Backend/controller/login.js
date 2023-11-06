const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
const path=require("path")

async function login(req,res){
    const hostname=req.body.hostname
    const password=req.body.password
    const data = await readFile();    //not include client
    for (var i = 0; i < data.length; i++) {
    if (data[i].hostname == hostname) {
      if(data[i].password == password)
      {
        res.status(200).send("Login Success !")
      }
    }
  }
  res.status(401).send("Login Failed, Unauthorized !")
}
module.exports=login