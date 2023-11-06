const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
const path=require("path")

async function login(req,res){
  console.log(req.body);
    const hostname=req.body.hostname
    const password=req.body.password
    console.log(hostname," ", password);
    const data = await readFile();    //not include client
    for (var i = 0; i < data.length; i++) {
    if (data[i].hostname == hostname) {
      if(data[i].password == password)
      {
        return res.status(200).send("Login Success !")
      }const { readFile, writeFile, readFull } = require("../models/dataAdmin.js");
      const fs=require("fs")
      const path=require("path")
      
      async function register(req, res) {
          //hostname not hostName
        const hostname = req.body.hostname;
        const password = req.body.password;
        const ipv6Address = req.socket.remoteAddress;
        const ipv4Address = ipv6Address.split(":").pop();
      
      //   console.log(`Client IP Address: ${ipv4Address}`);
      
        const data = await readFile();    //not include client
        for (var i = 0; i < data.length; i++) {
          if (data[i].hostname == hostname) {
            return res.status(409).send("Hostname already existed");
          }
        }
        const clientData = await readFull();
        const newClient = {
          hostname,
          password,
          localIp: ipv4Address,
        };
        clientData.client.push(newClient);
        const updatedJsonData = JSON.stringify(clientData)
      
        // Write the updated JSON data back to the file
        const destination = path.join(__dirname,"../models/dataAdmin.json")
        fs.writeFileSync(destination, updatedJsonData);
        return res.status(200).send("Register Success !");
      }
      module.exports = register;
      
    }
  }
  return res.status(401).send("Login Failed, Unauthorized !")
}
module.exports=login