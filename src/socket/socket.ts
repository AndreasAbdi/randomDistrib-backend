import setupSocketForDistribution from './distribution';
import setupSocketForRoom from './room';
import {joinRoom} from '../services/room-service';

export default class SocketSetup {
    name: string;
    data: any;

    constructor(private io: SocketIO.Server) {
        this.io.on('connection', function(socket) {
            console.log('a user connected');
            joinRoom('default', socket);
            setupSocketForDistribution(socket, io);
            setupSocketForRoom(socket, io);
        });
    }
}
