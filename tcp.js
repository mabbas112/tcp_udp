const net = require("net");

const server = net.createServer((socket) => {
    socket.write("Client Connected");
    socket.write("Description: TCP test in which i run a server and make a commection with it using telnet. ANd received data consoled.")
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

})

server.listen(8080);


// Go on terminal simply write 
// telnet 127.0.0.1 8080
// Now connection established