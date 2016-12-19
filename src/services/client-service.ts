import dataService from '../data/data-service';

export function setName(name: string, socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.setName(socket.id, name);
}

export function getName(socket: SocketIO.Socket, io: SocketIO.Server): void {

  const username = dataService.getName(socket.id);
  socket.emit('update-name', username);
}

export function getClients(socket: SocketIO.Socket, io: SocketIO.Server): void {
  const usernames = dataService.getNames();
  io.emit('update-names', usernames);
}

export function removeName(socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.removeName(socket.id);
}
