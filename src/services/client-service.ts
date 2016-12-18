import dataService from '../data/data-service';

export function setName(name: string, socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.setName(socket.id, name);
}

export function getName(socket: SocketIO.Socket, io: SocketIO.Server): string {
  return dataService.getName(socket.id);
}

export function getClients(socket: SocketIO.Socket, io: SocketIO.Server): string[] {
  return dataService.getNames();
}

export function removeName(socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.removeName(socket.id);
}
