const express = require('express');
const cors = require('cors');
const net = require('net');

const {controllerCommand} = require('./controller/controllerCommmand.js');

require('dotenv').config();

const app = express();

// xác thực khi dùng APIs
app.use(cors({
    origin: "http://localhost:4000",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json());
app.use(express.urlencoded({extends : true}));

// nhận API từ fontend và xử lí
app.use("/", async (req, res) => {
    if (req.method === "POST") {
      // điều kiển 
      await controllerCommand(req, res);
    } 
});
  
const PORT = 4001;

const listener = app.listen(PORT, () => {
  console.log(listener.address().port);
});

const server = new net.Server();
exports.server = server;
server.listen({port: 4002, host: 'localhost' }, function() {
    console.log("Server listening for connection requests on socket");
});

// nhận kết nối tcp
server.on('connection', function(socket) {
  console.log('A new connection has been established.');

  // Now that a TCP connection has been established, the server can send data to
  // the client by writing to its socket.
  socket.write('Hello, client.');

  // The server can also receive data from the client by reading from its socket.
  socket.on('data', function(chunk) {
      console.log(`Data received from the client: ${chunk.toString()}.`);
  });

  // end kết nối
  socket.on('end', function() {
      console.log('Closing connection with the client');
  });

  // lỗi
  socket.on('error', function(err) {
      console.log(`Error: ${err}`);
  });
});
