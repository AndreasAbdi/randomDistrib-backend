export default function setupSocket(socket: SocketIO.Socket, io: SocketIO.Server): void {
    socket.on('connect', connect(io));
    socket.on('disconnect', disconnect(io));
    socket.on('add-slice', addSlice(io));
    socket.on('remove-slice', removeSlice(io));
    socket.on('get-distribution', getDistribution(io));
    socket.on('decide', decide(io));
}

function connect(io: SocketIO.Server): () => void {
    //TODO
    return null;
}

function disconnect(io: SocketIO.Server): () => void {
    //TODO
    return null;
}

function addSlice(io: SocketIO.Server): () => void {
    //TODO
    return null;
}

function removeSlice(io: SocketIO.Server): () => void {
    //TODO
    return null;

}

function getDistribution(io: SocketIO.Server): () => void {
    //TODO
    return null;

}

function decide(io: SocketIO.Server): () => void {
    //TODO
    return null;
}