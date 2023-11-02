// Include Nodejs' net module.
const net = require('net');


// tạo kết nối TCP client
const client = new net.Socket();

client.connect({ port: 4002, host: 'localhost' }, function() {
    console.log('TCP connection established with the server.');

    client.write("hello server!");
});

// The client can also receive data from the server by reading from its socket.
client.on('data', function(chunk) {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    // Request an end to the connection after the data has been received.
    client.end();
});

client.on('end', function() {
    console.log('Requested an end to the TCP connection');
});