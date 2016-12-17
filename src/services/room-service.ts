import Data from '../data/data-service';

// Join a room.
// Socket should only ever be in one room.
export function joinRoom(roomName: string, socket: SocketIO.Socket, io: SocketIO.Server): void {
  if (alreadyInRoom(roomName, socket)) {
    return;
  }
  if (alreadyInAnyRoom(socket)) {
    socket.leaveAll();
  }
  socket.join(roomName);
  Data.addRoom(roomName);
  io.emit('list-room', Data.getRooms());
  socket.emit('update-room', roomName);
}

// List all the rooms for the target socket.
export function listRoom(socket: SocketIO.Socket, io: SocketIO.Server): void {
  socket.emit('list-room', Data.getRooms());
}

function alreadyInRoom(roomName: string, socket: SocketIO.Socket) {
  return socket.rooms[roomName];
}

function alreadyInAnyRoom(socket: SocketIO.Socket) {
  return Object.keys(socket.rooms).length;
}
