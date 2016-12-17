import dataService from '../data/data-service';

export default function setup(socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.setName(socket.id, 'anonymous user');
}
