import Data from '../data/data-service';
import { setName, getName, getClients } from '../services/client-service';
import tearDown from './tearDown';

export default function socketDistributionSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
  addEventListeners(socket, io);
}


function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
  socket.on('disconnect', disconnect(socket, io));
  socket.on('setName', (name: string) => setName(name, socket, io));
  socket.on('getName', () => getName(socket, io));
  socket.on('getClient', () => getClients(socket, io));
}

function disconnect(socket: SocketIO.Socket, io: SocketIO.Server): () => void {
  return () => {
    tearDown(socket, io);
  };
}


