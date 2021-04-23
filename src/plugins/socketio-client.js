import {io} from "socket.io-client";

let socket = undefined;
let url = 'http://localhost:4000';

function initializedSocket() {
    if(!socket) {
        socket = io(url);
    }
    return socket;
}

initializedSocket();

export default {    
    initializedSocket,
};