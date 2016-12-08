import Data from '../data/data-service';

export default function socketRoomSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('join-room', joinRoom(socket));
    socket.on('list-rooms', listRoom(socket, io));
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
function joinRoom(socket: SocketIO.Socket): (string) => void {

    return (roomName) => {
        if (socket.rooms[roomName]) {
            return;
        }

        const numberRoomsJoined = Object.keys(socket.rooms).length;
        if (numberRoomsJoined) {
            socket.leaveAll();
        }
        socket.join(roomName);
    };
}

function listRoom(socket: SocketIO.Socket, io: SocketIO.Server): () => any {
    return () => {

        socket.emit('list-room', Object.keys(io.sockets.adapter.rooms));
    };
}
