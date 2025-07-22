import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { BullModule } from "@nestjs/bull"
import { PostsController } from "./posts.controller"
import { PostsService } from "./posts.service"
import { PostsProcessor } from "./posts.processor"
import { Post, PostSchema } from "./schemas/post.schema"
import { UsersModule } from "../users/users.module"
import { NotificationsModule } from "../notifications/notifications.module"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    BullModule.registerQueue({
      name: "posts",
    }),
    UsersModule,
    NotificationsModule,
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsProcessor],
  exports: [PostsService],
})
export class PostsModule {}
