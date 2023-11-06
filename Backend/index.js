const express = require('express');
const cors = require('cors');
const net = require('net');
// const bodyParser = require('body-parser');
const {controllerCommand, controllerToClinet} = require('./controller/controllerAdmin.js');

require('dotenv').config();

const app = express();

// xác thực khi dùng APIs
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json());
app.use(express.urlencoded({extends : true}));
// app.use(bodyParser.urlencoded({ extended: true }));

// frontend và backend của server
app.post('/api/admin', async (req, res) => {
  const receivedData = req.body; // Dữ liệu JSON được gửi từ phía Frontend
  // Xử lý dữ liệu ở đây
  console.log('Received data:', receivedData);
  await controllerCommand(req, res);
});

// server và clinet
app.post('/api/server', async (req, res) => {
  const receivedData = req.body; // Dữ liệu JSON được gửi từ phía Frontend
  // Xử lý dữ liệu ở đây
  console.log('Received data:', receivedData);
  await controllerCommand(req, res);
});


// frontend và backend của Clinet
app.post('/api/user', async (req, res) => {
  const receivedData = req.body; // Dữ liệu JSON được gửi từ phía Frontend
  // Xử lý dữ liệu ở đây
  console.log('Received data:', receivedData);
  await controllerCommand(req, res);
});


  
const PORT = 3001;

const listener = app.listen(PORT, () => {
  console.log("Server listening for connection requests on port " + listener.address().port);
});


// const server = new net.Server();
// exports.server = server;
// server.listen({port: 4002, host: 'localhost' }, function() {
//     console.log("Server listening for connection requests on socket");
// });



// // nhận kết nối tcp
// server.on('connection', function(socket) {
//   console.log('A new connection has been established.');
//   // Now that a TCP connection has been established, the server can send data to
//   // the client by writing to its socket.
//   socket.write('Hello, client.');

//   // The server can also receive data from the client by reading from its socket.
//   socket.on('data', function(chunk) {
//       console.log(`Data received from the client: ${chunk.toString()}.`);
//   });

//   // end kết nối
//   socket.on('end', function() {
//       console.log('Closing connection with the client');
//   });

//   // lỗi
//   socket.on('error', function(err) {
//       console.log(`Error: ${err}`);
//   });
// });