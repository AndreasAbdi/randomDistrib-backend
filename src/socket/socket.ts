import setupSocketForDistribution from './distribution';
import setupSocketForRoom from './room';

export default class SocketSetup {
    name: string;
    data: any;

    constructor(private io: SocketIO.Server) {
        this.io.on('connection', function(socket) {
            console.log('a user connected');
            socket.join('default');
            setupSocketForDistribution(socket, io);
            setupSocketForRoom(socket, io);
        });
    }
}
