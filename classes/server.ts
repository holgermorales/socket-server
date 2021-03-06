import {SERVER_PORT} from "../global/environment";
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket'

export class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);

        this.escucharSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    private escucharSockets() {
        console.log("Escuchando conexiones - sockets");
        this.io.on('connection', cliente => {
            //console.log("Cliente conectado", cliente.id);

            socket.conectarCliente(cliente);


            /*
            cliente.on('disconnect', () => {
                console.log("Cliente desconectado");
            });
            */
            //Estate pendiente del evento mensaje
            socket.mensaje(cliente, this.io);

            socket.configurarusuario(cliente, this.io);

            socket.desconectar(cliente);
        });
    }


    start(callaback: Function) {
        this.httpServer.listen(this.port, callaback);

    }
}