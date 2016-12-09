import Data from '../data/data-service';
import { listRoom, joinRoom } from '../services/room-service';

export default function socketRoomSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('join-room', join(socket, io));
    socket.on('list-room', list(socket, io));
}

function connect(io: SocketIO.Server): () => void {
    //TODO
    return () => { };
}

function disconnect(io: SocketIO.Server): () => void {
    // TODO
    return () => { };
}

// Join a room.
// Socket should only ever be in one room.
function join(socket: SocketIO.Socket, io: SocketIO.Server): (string) => void {
    return (roomName) => { joinRoom(roomName, socket, io); };
}

function list(socket: SocketIO.Socket, io: SocketIO.Server): (socket: SocketIO.Socket, io: SocketIO.Server) => void {
    return ()=>{listRoom(socket, io)};
}
