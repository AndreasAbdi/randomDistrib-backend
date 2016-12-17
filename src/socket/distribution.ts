import { list, addSlice, removeSlice, decide } from '../services/distribution-service';

export default function socketDistributionSetup(socket: SocketIO.Socket, io: SocketIO.Server): void {
  addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
  socket.on('list', () => list(socket));
  socket.on('add-slice', (slice) => addSlice(slice, socket, io));
  socket.on('remove-slice', (slice) => removeSlice(slice, socket, io));
  socket.on('decide', (slice) => decide(slice, socket, io));
}

