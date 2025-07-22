import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { JwtModule } from "@nestjs/jwt"
import { ThrottlerModule } from "@nestjs/throttler"
import { BullModule } from "@nestjs/bull"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { PostsModule } from "./posts/posts.module"
import { NotificationsModule } from "./notifications/notifications.module"

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://guptavedansh2003:eeWbB7XOggQz0s6o@cluster2.cudg071.mongodb.net/"),
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 10, // default limit
      },
    ]),
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 6379,
      },
    }),
    JwtModule.register({
      global: true,
      secret: "your-secret-key",
      signOptions: { expiresIn: "24h" },
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
