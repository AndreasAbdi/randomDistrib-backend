import Data from '../data/data-service';
import { listRoom, joinRoom } from '../services/room-service';

export default function socketRoomSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('join-room', (roomName) => joinRoom(roomName, socket, io));
    socket.on('list-room', () => listRoom(socket, io));
}
