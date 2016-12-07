import setupSocket from './client';

export class RoomSocket {
    name: string;
    data: any;

    constructor(private io: SocketIO.Server) {
        this.io.on('connection', function(socket) {
            console.log('a user connected');
            setupSocket(socket, this.io);
        });
    }
}
