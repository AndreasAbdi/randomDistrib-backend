import dataService from '../data/data-service';

export function setName(name: string, socket: SocketIO.Socket, io: SocketIO.Server) {
  // TODO
}

export function getName(socket: SocketIO.Socket, io: SocketIO.Server) {
  // TODO
}

export function getClients(socket: SocketIO.Socket, io: SocketIO.Server) {
  // TODO
}

export function removeName(socket: SocketIO.Socket, io: SocketIO.Server) {
  // TODO
  dataService.removeName(socket.id);
}
