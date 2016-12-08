import Data from '../data/data-service';
import randomService from '../services/random-service';

export default function socketDistributionSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('list', list(socket, io));
    socket.on('add-slice', addSlice(socket, io));
    socket.on('remove-slice', removeSlice(socket, io));
    socket.on('decide', decide(io));
}

function list(socket: SocketIO.Socket, io: SocketIO.Server): () => any {
    return () => {
        Object.keys(socket.rooms).forEach(
            (roomName) => { socket.emit('list', Data.list(roomName)); }
        );
    };
}

function addSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                Data.addSlice(slice, roomName);
                socket.emit('list', Data.list(roomName));
            }
        );
    };
}

function removeSlice(socket: SocketIO.Socket, io: SocketIO.Server): (any) => void {
    return (slice) => {
        Object.keys(socket.rooms).forEach(
            (roomName) => {
                Data.removeSlice(slice, roomName);
                socket.emit('list', Data.list(roomName));
            }
        );
    };
}

function decide(io: SocketIO.Server): (any) => void {
    return (distribution) => {
        const result = randomService(distribution);
        io.emit('decision', result);
    };
}