import {removeName} from '../services/client-service';

export default function tearDown (socket: SocketIO.Socket, io: SocketIO.Server) {
  removeName(socket, io);
}
