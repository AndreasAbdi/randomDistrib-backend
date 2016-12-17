import setupSocketForDistribution from './distribution';
import setupSocketForRoom from './room';
import setupSocketForClients from './client';
import setup from './setup';
export default class SocketSetup {
  name: string;
  data: any;

  constructor(private io: SocketIO.Server) {
    this.init();
  }

  private init() {
    this.enableCORS();
    this.setConnectionCallbacks();
  }

  private setConnectionCallbacks() {
    this.io.on('connection', (socket) => {
      console.log('a user connected');
      setupSocketForDistribution(socket, this.io);
      setupSocketForRoom(socket, this.io);
      setupSocketForClients(socket, this.io);
      setup(socket, this.io);
    });
  }

  private enableCORS() {
    this.io.origins('*:*');
  }
}
