// // // // // // // import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// // // // // // // import type { UsersService } from "./users.service"
// // // // // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"
// // // // // // // import { Request } from "express"

// // // // // // // @Controller("users")
// // // // // // // @UseGuards(JwtAuthGuard)
// // // // // // // export class UsersController {
// // // // // // //   constructor(
// // // // // // //     private usersService: UsersService,
// // // // // // //     private notificationsGateway: NotificationsGateway,
// // // // // // //   ) {}

// // // // // // //   @Get()
// // // // // // //   async findAll(@Request() req) {
// // // // // // //     return this.usersService.findAll();
// // // // // // //   }

// // // // // // //   @Post("follow/:id")
// // // // // // //   async follow(@Request() req, @Param('id') targetUserId: string) {
// // // // // // //     const userId = req.user.sub
// // // // // // //     await this.usersService.follow(userId, targetUserId)

// // // // // // //     const user = await this.usersService.findById(userId)
// // // // // // //     this.notificationsGateway.sendNotification(targetUserId, {
// // // // // // //       type: "follow",
// // // // // // //       message: `${user.username} followed you`,
// // // // // // //       from: user.username,
// // // // // // //     })

// // // // // // //     return { message: "User followed successfully" }
// // // // // // //   }

// // // // // // //   @Post("unfollow/:id")
// // // // // // //   async unfollow(@Request() req, @Param('id') targetUserId: string) {
// // // // // // //     const userId = req.user.sub
// // // // // // //     await this.usersService.unfollow(userId, targetUserId)
// // // // // // //     return { message: "User unfollowed successfully" }
// // // // // // //   }
// // // // // // // }


// // // // // // import { Controller, Get, Post, Param, UseGuards, Request } from "@nestjs/common"
// // // // // // import type { UsersService } from "./users.service"
// // // // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // // // // @Controller("users")
// // // // // // @UseGuards(JwtAuthGuard)
// // // // // // export class UsersController {
// // // // // //   private usersService: UsersService
// // // // // //   private notificationsGateway: NotificationsGateway

// // // // // //   constructor(usersService: UsersService, notificationsGateway: NotificationsGateway) {
// // // // // //     this.usersService = usersService
// // // // // //     this.notificationsGateway = notificationsGateway
// // // // // //   }

// // // // // //   @Get()
// // // // // //   async findAll() {
// // // // // //     return this.usersService.findAll()
// // // // // //   }

// // // // // //   @Post("follow/:id")
// // // // // //   async follow(@Request() req: any, @Param('id') targetUserId: string) {
// // // // // //     const userId = req.user.sub
// // // // // //     await this.usersService.follow(userId, targetUserId)

// // // // // //     const user = await this.usersService.findById(userId)
// // // // // //     if (user) {
// // // // // //       this.notificationsGateway.sendNotification(targetUserId, {
// // // // // //         type: "follow",
// // // // // //         message: `${user.username} followed you`,
// // // // // //         from: user.username,
// // // // // //       })
// // // // // //     }

// // // // // //     return { message: "User followed successfully" }
// // // // // //   }

// // // // // //   @Post("unfollow/:id")
// // // // // //   async unfollow(@Request() req: any, @Param('id') targetUserId: string) {
// // // // // //     const userId = req.user.sub
// // // // // //     await this.usersService.unfollow(userId, targetUserId)
// // // // // //     return { message: "User unfollowed successfully" }
// // // // // //   }
// // // // // // }


// // // // // import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// // // // // import type { UsersService } from "./users.service"
// // // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"
// // // // // import { Request } from "express"

// // // // // @Controller("users")
// // // // // @UseGuards(JwtAuthGuard)
// // // // // export class UsersController {
// // // // //   constructor(
// // // // //     private usersService: UsersService,
// // // // //     private notificationsGateway: NotificationsGateway,
// // // // //   ) {}

// // // // //   @Get()
// // // // //   async findAll(@Request() req: Request) {
// // // // //     return this.usersService.findAll()
// // // // //   }

// // // // //   @Post("follow/:id")
// // // // //   async follow(@Request() req: Request, @Param('id') targetUserId: string) {
// // // // //     const userId = req.user.sub
// // // // //     await this.usersService.follow(userId, targetUserId)

// // // // //     const user = await this.usersService.findById(userId)
// // // // //     if (user) {
// // // // //       this.notificationsGateway.sendNotification(targetUserId, {
// // // // //         type: "follow",
// // // // //         message: `${user.username} followed you`,
// // // // //         from: user.username,
// // // // //       })
// // // // //     }

// // // // //     return { message: "User followed successfully" }
// // // // //   }

// // // // //   @Post("unfollow/:id")
// // // // //   async unfollow(@Request() req: Request, @Param('id') targetUserId: string) {
// // // // //     const userId = req.user.sub
// // // // //     await this.usersService.unfollow(userId, targetUserId)
// // // // //     return { message: "User unfollowed successfully" }
// // // // //   }
// // // // // }


// // // // import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// // // // import type { Request } from "express"
// // // // import type { UsersService } from "./users.service"
// // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // // interface AuthenticatedRequest extends Request {
// // // //   user: {
// // // //     sub: string
// // // //     email: string
// // // //   }
// // // // }

// // // // @Controller("users")
// // // // @UseGuards(JwtAuthGuard)
// // // // export class UsersController {
// // // //   constructor(
// // // //     private usersService: UsersService,
// // // //     private notificationsGateway: NotificationsGateway,
// // // //   ) {}

// // // //   @Get()
// // // //   async findAll() {
// // // //     return this.usersService.findAll()
// // // //   }

// // // //   @Post("follow/:id")
// // // //   async follow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// // // //     const userId = req.user.sub
// // // //     await this.usersService.follow(userId, targetUserId)

// // // //     const user = await this.usersService.findById(userId)
// // // //     if (user) {
// // // //       this.notificationsGateway.sendNotification(targetUserId, {
// // // //         type: "follow",
// // // //         message: `${user.username} followed you`,
// // // //         from: user.username,
// // // //       })
// // // //     }

// // // //     return { message: "User followed successfully" }
// // // //   }

// // // //   @Post("unfollow/:id")
// // // //   async unfollow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// // // //     const userId = req.user.sub
// // // //     await this.usersService.unfollow(userId, targetUserId)
// // // //     return { message: "User unfollowed successfully" }
// // // //   }
// // // // }


// // // import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// // // import type { Request } from "express"
// // // import type { UsersService } from "./users.service"
// // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // interface AuthenticatedRequest extends Request {
// // //   user: {
// // //     sub: string
// // //     email: string
// // //   }
// // // }

// // // @Controller("users")
// // // @UseGuards(JwtAuthGuard)
// // // export class UsersController {
// // //   constructor(
// // //     private usersService: UsersService,
// // //     private notificationsGateway: NotificationsGateway,
// // //   ) {}

// // //   @Get()
// // //   async findAll() {
// // //     return this.usersService.findAll()
// // //   }

// // //   @Post("follow/:id")
// // //   async follow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// // //     const userId = req.user.sub
// // //     await this.usersService.follow(userId, targetUserId)

// // //     const user = await this.usersService.findById(userId)
// // //     if (user) {
// // //       this.notificationsGateway.sendNotification(targetUserId, {
// // //         type: "follow",
// // //         message: `${user.username} followed you`,
// // //         from: user.username,
// // //       })
// // //     }

// // //     return { message: "User followed successfully" }
// // //   }

// // //   @Post("unfollow/:id")
// // //   async unfollow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// // //     const userId = req.user.sub
// // //     await this.usersService.unfollow(userId, targetUserId)
// // //     return { message: "User unfollowed successfully" }
// // //   }
// // // }


// // import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// // import { Request } from "express"
// // import { UsersService } from "./users.service"
// // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // import { NotificationsGateway } from "../notifications/notifications.gateway"

// // interface AuthenticatedRequest extends Request {
// //   user: {
// //     sub: string
// //     email: string
// //   }
// // }

// // @Controller("users")
// // @UseGuards(JwtAuthGuard)
// // export class UsersController {
// //   constructor(
// //     private usersService: UsersService,
// //     private notificationsGateway: NotificationsGateway,
// //   ) {}

// //   @Get()
// //   async findAll(req: AuthenticatedRequest) {
// //     return this.usersService.findAll()
// //   }

// //   @Post("follow/:id")
// //   async follow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// //     const userId = req.user.sub
// //     await this.usersService.follow(userId, targetUserId)

// //     const user = await this.usersService.findById(userId)
// //     if (user) {
// //       this.notificationsGateway.sendNotification(targetUserId, {
// //         type: "follow",
// //         message: `${user.username} followed you`,
// //         from: user.username,
// //       })
// //     }

// //     return { message: "User followed successfully" }
// //   }

// //   @Post("unfollow/:id")
// //   async unfollow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
// //     const userId = req.user.sub
// //     await this.usersService.unfollow(userId, targetUserId)
// //     return { message: "User unfollowed successfully" }
// //   }
// // }

// import { Controller, Get, Post, Param, UseGuards } from "@nestjs/common"
// import type { Request } from "express"
// import type { UsersService } from "./users.service"
// import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// import type { NotificationsGateway } from "../notifications/notifications.gateway"

// interface AuthenticatedRequest extends Request {
//   user: {
//     sub: string
//     email: string
//   }
// }

// @Controller("users")
// @UseGuards(JwtAuthGuard)
// export class UsersController {
//   constructor(
//     private usersService: UsersService,
//     private notificationsGateway: NotificationsGateway,
//   ) {}

//   @Get()
//   async findAll() {
//     return this.usersService.findAll()
//   }

//   @Post("follow/:id")
//   async follow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
//     const userId = req.user.sub
//     await this.usersService.follow(userId, targetUserId)

//     const user = await this.usersService.findById(userId)
//     if (user) {
//       this.notificationsGateway.sendNotification(targetUserId, {
//         type: "follow",
//         message: `${user.username} followed you`,
//         from: user.username,
//       })
//     }

//     return { message: "User followed successfully" }
//   }

//   @Post("unfollow/:id")
//   async unfollow(req: AuthenticatedRequest, @Param('id') targetUserId: string) {
//     const userId = req.user.sub
//     await this.usersService.unfollow(userId, targetUserId)
//     return { message: "User unfollowed successfully" }
//   }
// }

import { Controller, Get, Post, Param, UseGuards, Req } from "@nestjs/common"
import  { Request } from "express"
import { UsersService } from "./users.service"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import  { NotificationsGateway } from "../notifications/notifications.gateway"

interface AuthenticatedRequest extends Request {
  user: {
    sub: string
    email: string
  }
}

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private notificationsGateway: NotificationsGateway,
  ) {}

  @Get()
  async findAll() {
    return this.usersService.findAll()
  }

  @Post("follow/:id")
 async follow(@Req() req: AuthenticatedRequest, @Param('id') targetUserId: string) {
  const userId = req.user.sub
    await this.usersService.follow(userId, targetUserId)

    const user = await this.usersService.findById(userId)
    if (user) {
      this.notificationsGateway.sendNotification(targetUserId, {
        type: "follow",
        message: `${user.username} followed you`,
        from: user.username,
      })
    }

    return { message: "User followed successfully" }
  }

  @Post("unfollow/:id")
  async unfollow(@Req() req: AuthenticatedRequest, @Param('id') targetUserId: string) {
  const userId = req.user.sub
    await this.usersService.unfollow(userId, targetUserId)
    return { message: "User unfollowed successfully" }
  }
}
