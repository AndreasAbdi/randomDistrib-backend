

export class RoomSocket {
    name: string;
    data: any;

    constructor(private io: any) {
        this.io.on('connection', function(socket) {
            console.log('a user has connected');
            socket.on('chat message', function(msg) {
                console.log('message: ' + msg);
            });
        });
    }
}
