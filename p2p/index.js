const express = require ("express")
const cors = require ("cors")

const app=express()
app.use(cors("*"))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false}))
const createNode = require("./src/index");
const node = createNode();
node.listen(3000,3001,()=>{
    console.log("node server is running on port 3000 and file server is 3001");
})
app.post("/fetch",(req,res)=>{
    const clientIP=req.body.clientIp
    const clientPort=req.body.clientPort
    const fileName=req.body.fileName
    node.connect(clientIP,Number(clientPort), () => {
        console.log(`Connection to ${ip} established.`);
      })
})
app.listen("8080",()=>{console.log("im running on 8080");})