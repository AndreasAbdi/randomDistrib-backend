import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as serveStatic from 'serve-static';
import * as socketIo from 'socket.io';
import * as morgan from 'morgan';

import  SocketSetup  from './socket/socket';

declare var process;
declare var __dirname;

class Server {
    private server: any;
    private root: string;
    private port: number;
    private socketServer: any;
    public app: any;

    public static bootstrap(): Server { return new Server(); }

    constructor() {
        this.app = express();
        this.config();
        this.logging();
        this.routes();
        this.setupServer();
        this.databases();
        this.sockets();
        this.listen();
    }

    private config(): void {
        this.port = process.env.PORT || 5000;
        this.root = path.join(path.resolve(__dirname, './'));
    }

    private logging(): void {
        this.app.use(morgan('dev'));
    }

    private routes(): void {
        let router: express.Router;
        router = express.Router();
        this.app
            .use('/assets', serveStatic(path.resolve(this.root, 'assets')));

        router.get('/', (request: express.Request, result: express.Response) => {
            result.sendFile(path.join(this.root, '/index.html'));
        });

        this.app.use('*', router);
    }

    private setupServer(): void {
        this.server = http.createServer(this.app);
    }

    private databases(): void { }

    private sockets(): void {
        this.socketServer = socketIo(this.server);
        let socket = new SocketSetup(this.socketServer);
    }

    private listen(): void {
        this.server
            .listen(this.port);

        this.server
            .on('error', error => {
                console.log('ERROR', error);
            });

        this.server
            .on('listening', () => {
                console.log('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', this.port, this.port);
            });

    }

}

// Bootstrap the server
let server = Server.bootstrap();
export default server.app;
