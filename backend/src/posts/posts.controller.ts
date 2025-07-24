// // // // // // import { Controller, Post, Get, UseGuards, Request } from "@nestjs/common"
// // // // // // import { Throttle } from "@nestjs/throttler"
// // // // // // import type { PostsService } from "./posts.service"
// // // // // // import type { UsersService } from "../users/users.service"
// // // // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // // // @Controller("posts")
// // // // // // @UseGuards(JwtAuthGuard)
// // // // // // export class PostsController {
// // // // // //   constructor(
// // // // // //     private postsService: PostsService,
// // // // // //     private usersService: UsersService,
// // // // // //   ) {}

// // // // // //   @Post()
// // // // // //   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
// // // // // //   async create(createPostDto: CreatePostDto, @Request() req) {
// // // // // //     return this.postsService.queuePost(createPostDto, req.user.sub)
// // // // // //   }

// // // // // //   @Get('timeline')
// // // // // //   async getTimeline(@Request() req) {
// // // // // //     const user = await this.usersService.findById(req.user.sub);
// // // // // //     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
// // // // // //   }
// // // // // // }


// // // // // import { Controller, Post, Get, UseGuards, Request } from "@nestjs/common"
// // // // // import { Throttle } from "@nestjs/throttler"
// // // // // import type { PostsService } from "./posts.service"
// // // // // import type { UsersService } from "../users/users.service"
// // // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // // @Controller("posts")
// // // // // @UseGuards(JwtAuthGuard)
// // // // // export class PostsController {
// // // // //   constructor(
// // // // //     private postsService: PostsService,
// // // // //     private usersService: UsersService,
// // // // //   ) {}

// // // // //   @Post()
// // // // //   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
// // // // //   async create(createPostDto: CreatePostDto, @Request() req: any) {
// // // // //     return this.postsService.queuePost(createPostDto, req.user.sub)
// // // // //   }

// // // // //   @Get('timeline')
// // // // //   async getTimeline(@Request() req: any) {
// // // // //     const user = await this.usersService.findById(req.user.sub);
// // // // //     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
// // // // //   }
// // // // // }


// // // // import { Controller, Post, Get, UseGuards, Request } from "@nestjs/common"
// // // // import { Throttle } from "@nestjs/throttler"
// // // // import type { PostsService } from "./posts.service"
// // // // import type { UsersService } from "../users/users.service"
// // // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // @Controller("posts")
// // // // @UseGuards(JwtAuthGuard)
// // // // export class PostsController {
// // // //   constructor(
// // // //     private postsService: PostsService,
// // // //     private usersService: UsersService,
// // // //   ) {}

// // // //   @Post()
// // // //   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
// // // //   async create(createPostDto: CreatePostDto, @Request() req: any) {
// // // //     return this.postsService.queuePost(createPostDto, req.user.sub)
// // // //   }

// // // //   @Get('timeline')
// // // //   async getTimeline(@Request() req: any) {
// // // //     const user = await this.usersService.findById(req.user.sub);
// // // //     if (!user) {
// // // //       return []
// // // //     }
// // // //     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
// // // //   }
// // // // }

// // // import { Controller, Post, Get, UseGuards, Req, Body } from "@nestjs/common"
// // // import { Throttle } from "@nestjs/throttler"
// // // import type { Request } from "express"
// // // import type { PostsService } from "./posts.service"
// // // import type { UsersService } from "../users/users.service"
// // // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // interface AuthenticatedRequest extends Request {
// // //   user: {
// // //     sub: string
// // //     email: string
// // //   }
// // // }

// // // @Controller("posts")
// // // @UseGuards(JwtAuthGuard)
// // // export class PostsController {
// // //   constructor(
// // //     private postsService: PostsService,
// // //     private usersService: UsersService,
// // //   ) {}

// // //   @Post()
// // //   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
// // //   async create(@Body() createPostDto: CreatePostDto, @Req() req: AuthenticatedRequest) {
// // //     return this.postsService.queuePost(createPostDto, req.user.sub)
// // //   }

// // //   @Get('timeline')
// // //   async getTimeline(@Req() req: AuthenticatedRequest) {
// // //     const user = await this.usersService.findById(req.user.sub);
// // //     if (!user) {
// // //       return []
// // //     }
// // //     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
// // //   }
// // // }


// // import { Controller, Post, Get, UseGuards, Req } from "@nestjs/common"
// // import { Throttle } from "@nestjs/throttler"
// // import type { Request } from "express"
// // import type { PostsService } from "./posts.service"
// // import type { UsersService } from "../users/users.service"
// // import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// // import type { CreatePostDto } from "./dto/create-post.dto"

// // interface AuthenticatedRequest extends Request {
// //   user: {
// //     sub: string
// //     email: string
// //   }
// // }

// // @Controller("posts")
// // @UseGuards(JwtAuthGuard)
// // export class PostsController {
// //   constructor(
// //     private postsService: PostsService,
// //     private usersService: UsersService,
// //   ) {}

// //   @Post()
// //   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
// //   async create(createPostDto: CreatePostDto, @Req() req: AuthenticatedRequest) {
// //     return this.postsService.queuePost(createPostDto, req.user.sub)
// //   }

// //   @Get('timeline')
// //   async getTimeline(@Req() req: AuthenticatedRequest) {
// //     const user = await this.usersService.findById(req.user.sub);
// //     if (!user) {
// //       return []
// //     }
// //     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
// //   }
// // }


// import { Controller, Post, Get, UseGuards, Req, Body } from "@nestjs/common"
// import { Throttle } from "@nestjs/throttler"
// import { Request } from "express"
// import { PostsService } from "./posts.service"
// import { UsersService } from "../users/users.service"
// import { JwtAuthGuard } from "../auth/jwt-auth.guard"
// import { CreatePostDto } from "./dto/create-post.dto"

// interface AuthenticatedRequest extends Request {
//   user: {
//     sub: string
//     email: string
//   }
// }

// @Controller("posts")
// @UseGuards(JwtAuthGuard)
// export class PostsController {
//   constructor(
//     private postsService: PostsService,
//     private usersService: UsersService,
//   ) {}

//   @Post()
//   @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
//   async create(@Body() createPostDto: CreatePostDto, @Req() req: AuthenticatedRequest) {
//     return this.postsService.queuePost(createPostDto, req.user.sub)
//   }

//   @Get('timeline')
//   async getTimeline(@Req() req: AuthenticatedRequest) {
//     const user = await this.usersService.findById(req.user.sub);
//     if (!user) {
//       return []
//     }
//     return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
//   }
// }


import { Controller, Post, Get, UseGuards, Req, Body } from "@nestjs/common"
import { Throttle } from "@nestjs/throttler"
import  { Request } from "express"
import  { PostsService } from "./posts.service"
import  { UsersService } from "../users/users.service"
import { JwtAuthGuard } from "../auth/jwt-auth.guard"
import  { CreatePostDto } from "./dto/create-post.dto"

interface AuthenticatedRequest extends Request {
  user: {
    sub: string
    email: string
  }
}

@Controller("posts")
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {}

  @Post()
  @Throttle({ default: { limit: 3, ttl: 60000 } }) // 3 posts per minute
  async create(@Req() req: AuthenticatedRequest, @Body() createPostDto: CreatePostDto, ) {
    return this.postsService.queuePost(createPostDto, req.user.sub)
  }

  @Get('timeline')
  async getTimeline(@Req() req: AuthenticatedRequest) {
    const user = await this.usersService.findById(req.user.sub);
    if (!user) {
      return []
    }
    return this.postsService.findTimeline(req.user.sub, user.following.map(id => id.toString()));
  }
}
