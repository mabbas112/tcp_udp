const dgram = require("dgram");

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, info) => {
    console.log(`Server got ${msg} from ${info.address} address and port ${info.port}`);
})

socket.bind(8080);


//  From terminal 
// echo "hi again" | nc -u 127.0.0.1 8080
