import {SERVER_PORT} from "../global/environment";
import express from 'express';

export class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    start(callaback: Function) {
        this.app.listen(this.port, callaback);

    }
}