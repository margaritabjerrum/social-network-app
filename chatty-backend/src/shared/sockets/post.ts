import { Server, Socket } from 'socket.io';

let socketIOPostObject: Server;

export class SocketIOPostHandler {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
    socketIOPostObject = io;
  }

  public listen(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.io.on('connection', (socket: Socket) => {
      console.log('Post socketIO handler');
    });
  }
}
