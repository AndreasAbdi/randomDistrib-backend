import randomService from '../services/random-service';
import Data from '../data/data-service';
import Slice from '../data/slice';

export function list(socket: SocketIO.Socket): void {
  Object.keys(socket.rooms).forEach(
    (roomName) => {
      emitList(socket, Data.list(roomName));
    }
  );
}

export function addSlice(slice: Slice, socket: SocketIO.Socket, io: SocketIO.Server): void {
  Object.keys(socket.rooms).forEach(
    (roomName) => {
      Data.addSlice(slice, roomName);
      emitListToRoom(io, roomName, Data.list(roomName));
    }
  );
}

export function removeSlice(slice: Slice, socket: SocketIO.Socket, io: SocketIO.Server): void {
  Object.keys(socket.rooms).forEach(
    (roomName) => {
      Data.removeSlice(slice, roomName);
      emitListToRoom(io, roomName, Data.list(roomName));
    }
  );
}

export function decide(slice: Slice, socket: SocketIO.Socket, io: SocketIO.Server): void {
  Object.keys(socket.rooms).forEach(
    (roomName) => {
      const result = randomService(Data.list(roomName));
      io.to(roomName).emit('decision', result);
    }
  );
}

function emitListToRoom(io: SocketIO.Server, roomName: string, data) {
  io.to(roomName).emit('list', data);
}

function emitList(socket: SocketIO.Socket, data): void {
  socket.emit('list', data);
}
