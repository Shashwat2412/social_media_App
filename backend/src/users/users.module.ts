// import { Module, forwardRef } from "@nestjs/common"
// import { MongooseModule } from "@nestjs/mongoose"
// import { UsersController } from "./users.controller"
// import { UsersService } from "./users.service"
// import { User, UserSchema } from "./schemas/user.schema"
// import { NotificationsModule } from "../notifications/notifications.module"
// import { AuthModule } from "../auth/auth.module"; 

// @Module({
//   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), NotificationsModule,     forwardRef(() => AuthModule),],
//   controllers: [UsersController],
//   providers: [UsersService],
//   exports: [UsersService],
// })
// export class UsersModule {}



import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { User, UserSchema } from "./schemas/user.schema"
import { NotificationsGateway } from "../notifications/notifications.gateway"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, NotificationsGateway],
  exports: [UsersService], // <-- Needed by other modules like PostsModule or AuthModule
})
export class UsersModule {}
