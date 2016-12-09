
// Join a room.
// Socket should only ever be in one room.
export function joinRoom(roomName: string, socket: SocketIO.Socket): void {
    if (socket.rooms[roomName]) {
        return;
    }
    if (Object.keys(socket.rooms).length) {
        socket.leaveAll();
    }
    socket.join(roomName);
    socket.emit('update-room', roomName);
}

export function listRoom(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.emit('list-room', Object.keys(io.sockets.adapter.rooms));
}
