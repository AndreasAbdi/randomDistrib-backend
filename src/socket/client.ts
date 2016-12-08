import Data from '../data/data-service';
import randomService from '../services/random-service';

export default function setupSocket(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('add-slice', addSlice( io));
    socket.on('remove-slice', removeSlice( io));
    socket.on('decide', decide( io));
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

function addSlice(io: SocketIO.Server): (any) => void {
    return (slice) => {
        Data.addSlice(slice);
        io.emit('list', Data.list());
    };
}

function removeSlice(io: SocketIO.Server): (any) => void {
    return (slice) => {
        Data.removeSlice(slice);
        io.emit('list', Data.list());
    };
}


function decide(io: SocketIO.Server): (any) => void {
    return (s) => {
        const result = randomService(s);
        io.emit('decision', result);
    };
}