import dataService from '../data/data-service';

export default function setup(socket: SocketIO.Socket, io: SocketIO.Server) {
  dataService.setName(socket.id, guidGenerator());
}

function guidGenerator() {
  let S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0)
      .toString(16)
      .substring(1);
  };
  return (S4() + S4());
}
