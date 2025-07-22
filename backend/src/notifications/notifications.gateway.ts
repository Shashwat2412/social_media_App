import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
   OnGatewayConnection,
   OnGatewayDisconnect,
} from "@nestjs/websockets"
import  { Server, Socket } from "socket.io"

@WebSocketGateway({
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  private userSockets = new Map<string, string>()

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`)
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`)
    // Remove user from map
    for (const [userId, socketId] of this.userSockets.entries()) {
      if (socketId === client.id) {
        this.userSockets.delete(userId)
        break
      }
    }
  }

  @SubscribeMessage("join")
  handleJoin(client: Socket, userId: string) {
    this.userSockets.set(userId, client.id)
    client.join(`user_${userId}`)
  }

  sendNotification(userId: string, notification: any) {
    this.server.to(`user_${userId}`).emit("notification", notification)
  }
}
