export default function setupSocket(socket: SocketIO.Socket, io: SocketIO.Server): void {
    addEventListeners(socket, io);
}

function addEventListeners(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('add-slice', addSlice(io));
    socket.on('remove-slice', removeSlice(io));
    socket.on('get-distribution', getDistribution(io));
    socket.on('decide', decide(io));
    socket.on('list', list(socket, io));
    socket.on('chat-message', chatMessage);
}

function chatMessage(message: any): void {
    console.log(message);
}

function list(socket: SocketIO.Socket, io: SocketIO.Server): () => any {
    //TODO
    return () => {
        let data = [
            { name: `LOL`, probability: 50 },
            { name: `OW`, probability: 50 }
        ];

        socket.emit('list', data);
    };
}
function connect(io: SocketIO.Server): () => void {
    //TODO
    return () => { };
}

function disconnect(io: SocketIO.Server): () => void {
    // TODO
    return () => { };
}

function addSlice(io: SocketIO.Server): () => void {
    // TODO
    return () => { };
}

function removeSlice(io: SocketIO.Server): () => void {
    // TODO
    return () => { };

}

function getDistribution(io: SocketIO.Server): () => void {
    // TODO
    return () => { };

}

function decide(io: SocketIO.Server): () => void {
    // TODO
    return () => { };
}