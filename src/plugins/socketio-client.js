import {io} from "socket.io-client";
import store from "../store";

let socket = undefined;
let url = (process.env.NODE_ENV == 'production')? 'https://mstalk.herokuapp.com/': 'http://localhost:4000/';

// get the user
const user = store.getters['AuthModule/getAuthUser']

function initializedSocket() {
    if(!socket) {
        socket = io(url, {
            autoConnect: true,
            auth: {user}
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
