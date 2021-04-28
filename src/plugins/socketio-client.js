import {io} from "socket.io-client";

let socket = undefined;
let url = (process.env.NODE_ENV == 'production')? 'https://mstalk.herokuapp.com/': 'http://localhost:4000/';

function initializedSocket() {
    if(!socket) {
        socket = io(url, {
            autoConnect: true
        });
    }
    return socket;
}

function addEventListener(event) {
    socket.on(event.type, event.callback);
    console.log(event);
}

function addEventEmitter(event) {
    socket.emit(event.type, event.data);
}

function disConnectSocket() {
    console.log(socket);
    socket.disconnect();
}

export default {    
    initializedSocket,
    addEventListener,
    addEventEmitter,
    disConnectSocket
};
