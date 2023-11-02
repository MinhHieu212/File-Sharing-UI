const net = require('net');
const { readFile} = require('../models/read.js');
// const { server } = require('../index.js');
// const { writeFile} = require('../models/write.js');
const tcpp = require('tcp-ping');

const controllerCommand = async (req, res) => {
    // tách comand thành array
    command = req.body["terminalInput"];
    array = command.split(' ');

    // check command

    if(array.length > 2 || array[0] !== "ping" && array[0] !== "discover" && array[0] !== "hostname"  
                        || array.length === 1 && array[0] !== "hostname")
        return res.send({"ERROR" : "Unknown command"});

    
    data = await readFile();

    if(array[0] === "hostname")
    {
        return res.send({"hostname"  : data.map((item) => item.hostName)});
    }        

    // check hostname
    listHostname = data.filter((item) => item.hostName == array[1]);
    if(listHostname.length == 0) 
        return res.send({"ERROR" : "Unknown Hostname"});

    hostname = listHostname[0]; // hostname
    // discover hostname
    if(array[0] === "discover")
    {
        return res.send({"discover"  : hostname.file});
    }
    else if(array[0] === "ping")
    {
        tcpp.probe( hostname.hostName, hostname.port, async (err, available) => {
            return res.send({"ping" : available})
        });  
    }
}

exports.controllerCommand = controllerCommand;



