import setupSocketForDistribution from './distribution';
import setupSocketForRoom from './room';

export default class SocketSetup {
  name: string;
  data: any;

  constructor(private io: SocketIO.Server) {
    this.enableCORS();
    this.setConnectionCallback();
  }

  private setConnectionCallback() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      setupSocketForDistribution(socket, this.io);
      setupSocketForRoom(socket, this.io);
    });
  }

  private enableCORS() {
    this.io.origins('*:*'); // for latest version
  }
}
