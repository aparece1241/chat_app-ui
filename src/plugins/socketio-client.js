import {io} from "socket.io-client";
import store from "../store";

let socket = undefined;
let url = (process.env.NODE_ENV == 'production')? 'https://mstalk.herokuapp.com/': 'http://localhost:4000/';

function initializedSocket() {
    if(!socket) {
        socket = io(url, {
            autoConnect: true,
            auth: {username: store.state.user.username}
        });
    }
    return socket;
}

function addEventListener(event) {
    socket.on(event.type, event.callback);
}

function addEventEmitter(event) {
    socket.emit(event.type, event.data);
}

function disConnectSocket() {
    socket.disconnect();
}

export default {    
    initializedSocket,
    addEventListener,
    addEventEmitter,
    disConnectSocket
};
