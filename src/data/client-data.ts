import dataService from '../data/data-service';

export default class ClientData {
  getName(socket: SocketIO.Socket) {
    dataService.getName(socket.id);
  }

  getClients() {
    dataService.getNames();
  }
}
