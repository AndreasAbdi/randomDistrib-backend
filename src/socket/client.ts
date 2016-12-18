import Data from '../data/data-service';
import { setName, getName, getClients } from '../services/client-service';
import tearDown from './tearDown';

export default function socketDistributionSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
  addEventListeners(socket, io);
}


function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
  socket.on('disconnect', disconnect(socket, io));
  socket.on('set-name', (name: string) => setName(name, socket, io));
  socket.on('get-name', () => getName(socket, io));
  socket.on('get-names', () => getClients(socket, io));
}

function disconnect(socket: SocketIO.Socket, io: SocketIO.Server): () => void {
  return () => {
    tearDown(socket, io);
  };
}


