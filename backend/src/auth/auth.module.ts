// import { Module } from "@nestjs/common"
// import { AuthController } from "./auth.controller"
// import { AuthService } from "./auth.service"
// import { UsersModule } from "../users/users.module"
// import { JwtAuthGuard } from "./jwt-auth.guard"

// @Module({
//   imports: [UsersModule],
//   controllers: [AuthController],
//   providers: [AuthService, JwtAuthGuard],
//   exports: [JwtAuthGuard],
// })
// export class AuthModule {}


import { Module, forwardRef } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Module({
  imports: [forwardRef(() => UsersModule)], // 👈 fix
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthModule {}
