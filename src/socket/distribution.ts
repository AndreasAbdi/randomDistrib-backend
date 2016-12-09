import Data from '../data/data-service';
import randomService from '../services/random-service';

export default function socketDistributionSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('list', list(socket, io));
    socket.on('add-slice', addSlice(socket, io));
    socket.on('remove-slice', removeSlice(socket, io));
    socket.on('decide', decide(socket, io));
}

function list(socket: SocketIO.Socket, io: SocketIO.Server): () => any {
    return () => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                emitList(socket, Data.list(roomName));
            }
        );
    };
}

function addSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                Data.addSlice(slice, roomName);
                emitListToRoom(io, roomName, Data.list(roomName));
            }
        );
    };
}

function removeSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                Data.removeSlice(slice, roomName);
                emitListToRoom(io, roomName, Data.list(roomName));
            }
        );
    };
}

function decide(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                const result = randomService(Data.list(roomName));
                io.to(roomName).emit('decision', result);
            }
        );
    };
}

function emitListToRoom(io: SocketIO.Server, roomName: string, data) {
    io.to(roomName).emit('list', data);
}

function emitList(socket: SocketIO.Socket, data): void {
    socket.emit('list', data);
}
