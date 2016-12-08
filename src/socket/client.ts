import Data from '../data/data-service';
import randomService from '../services/random-service';

export default function setupSocket(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('add-slice', addSlice(socket, io));
    socket.on('remove-slice', removeSlice(socket, io));
    socket.on('decide', decide(io));
    socket.on('list', list(socket, io));
    socket.on('chat-message', chatMessage);
}

function chatMessage(message: any): void {
    console.log(message);
}

function list(socket: SocketIO.Socket, io: SocketIO.Server): () => any {
    return () => {
        socket.emit('list', Data.list());
    };
}

function connect(io: SocketIO.Server): () => void {
    //TODO
    return () => { };
}

function disconnect(io: SocketIO.Server): () => void {
    // TODO
    return () => { };
}

function addSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    // TODO
    return (slice) => {
        Data.addSlice(slice);
        socket.emit('list', Data.list());
    };
}

function removeSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Data.removeSlice(slice);
        socket.emit('list', Data.list());
    };
}


function decide(io: SocketIO.Server): (any) => void {
    // TODO
    return(s)=>{return randomService(s); };
}