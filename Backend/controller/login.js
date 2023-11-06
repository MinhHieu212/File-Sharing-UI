const {readFile, writeFile} = require('../models/dataAdmin.js');

function login(req,res){
    const hostname=req.body.hostname
    const password=req.body.password
    const data=readFile()
    console.log(data);
}
module.exports=login