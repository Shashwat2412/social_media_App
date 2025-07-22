// // // // // import { Process, Processor } from "@nestjs/bull"
// // // // // import { Injectable } from "@nestjs/common"
// // // // // import type { Job } from "bull"
// // // // // import type { PostsService } from "./posts.service"
// // // // // import type { UsersService } from "../users/users.service"
// // // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // // // @Processor("posts")
// // // // // @Injectable()
// // // // // export class PostsProcessor {
// // // // //   constructor(
// // // // //     private postsService: PostsService,
// // // // //     private usersService: UsersService,
// // // // //     private notificationsGateway: NotificationsGateway,
// // // // //   ) {}

// // // // //   @Process("create-post")
// // // // //   async handleCreatePost(job: Job) {
// // // // //     const { title, content, author } = job.data

// // // // //     // Save post to database
// // // // //     const post = await this.postsService.create({ title, content, author })

// // // // //     // Get author info and followers
// // // // //     const user = await this.usersService.findById(author)

// // // // //     // Send notifications to followers
// // // // //     if (user && user.followers && user.followers.length > 0) {
// // // // //       user.followers.forEach((followerId) => {
// // // // //         this.notificationsGateway.sendNotification(followerId.toString(), {
// // // // //           type: "new_post",
// // // // //           message: `${user.username} created a new post`,
// // // // //           from: user.username,
// // // // //           postId: post._id,
// // // // //         })
// // // // //       })
// // // // //     }

// // // // //     return post
// // // // //   }
// // // // // }


// // // // import { Process, Processor } from "@nestjs/bull"
// // // // import { Injectable } from "@nestjs/common"
// // // // import type { Job } from "bull"
// // // // import type { PostsService } from "./posts.service"
// // // // import type { UsersService } from "../users/users.service"
// // // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // // @Processor("posts")
// // // // @Injectable()
// // // // export class PostsProcessor {
// // // //   constructor(
// // // //     private postsService: PostsService,
// // // //     private usersService: UsersService,
// // // //     private notificationsGateway: NotificationsGateway,
// // // //   ) {}

// // // //   @Process("create-post")
// // // //   async handleCreatePost(job: Job) {
// // // //     const { title, content, author } = job.data

// // // //     // Save post to database
// // // //     const post = await this.postsService.create({ title, content, author })

// // // //     // Get author info and followers
// // // //     const user = await this.usersService.findById(author)

// // // //     // Send notifications to followers
// // // //     if (user && user.followers && user.followers.length > 0) {
// // // //       user.followers.forEach((followerId) => {
// // // //         this.notificationsGateway.sendNotification(followerId.toString(), {
// // // //           type: "new_post",
// // // //           message: `${user.username} created a new post`,
// // // //           from: user.username,
// // // //           postId: post._id?.toString(),
// // // //         })
// // // //       })
// // // //     }

// // // //     return post
// // // //   }
// // // // }


// // // import { Process, Processor } from "@nestjs/bull"
// // // import { Injectable } from "@nestjs/common"
// // // import type { Job } from "bull"
// // // import type { PostsService } from "./posts.service"
// // // import type { UsersService } from "../users/users.service"
// // // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // // @Processor("posts")
// // // @Injectable()
// // // export class PostsProcessor {
// // //   constructor(
// // //     private postsService: PostsService,
// // //     private usersService: UsersService,
// // //     private notificationsGateway: NotificationsGateway,
// // //   ) {}

// // //   @Process("create-post")
// // //   async handleCreatePost(job: Job) {
// // //     const { title, content, author } = job.data

// // //     // Save post to database
// // //     const post = await this.postsService.create({ title, content, author })

// // //     // Get author info and followers
// // //     const user = await this.usersService.findById(author)

// // //     // Send notifications to followers
// // //     if (user && user.followers && user.followers.length > 0) {
// // //       user.followers.forEach((followerId) => {
// // //         this.notificationsGateway.sendNotification(followerId.toString(), {
// // //           type: "new_post",
// // //           message: `${user.username} created a new post`,
// // //           from: user.username,
// // //           postId: post._id?.toString(),
// // //         })
// // //       })
// // //     }

// // //     return post
// // //   }
// // // }


// // import { Process, Processor } from "@nestjs/bull"
// // import { Injectable } from "@nestjs/common"
// // import type { Job } from "bull"
// // import type { PostsService } from "./posts.service"
// // import type { UsersService } from "../users/users.service"
// // import type { NotificationsGateway } from "../notifications/notifications.gateway"

// // @Processor("posts")
// // @Injectable()
// // export class PostsProcessor {
// //   constructor(
// //     private postsService: PostsService,
// //     private usersService: UsersService,
// //     private notificationsGateway: NotificationsGateway,
// //   ) {}

// //   @Process("create-post")
// //   async handleCreatePost(job: Job) {
// //     const { title, content, author } = job.data

// //     // Save post to database
// //     const post = await this.postsService.create({ title, content, author })

// //     // Get author info and followers
// //     const user = await this.usersService.findById(author)

// //     // Send notifications to followers
// //     if (user && user.followers && user.followers.length > 0) {
// //       user.followers.forEach((followerId) => {
// //         this.notificationsGateway.sendNotification(followerId.toString(), {
// //           type: "new_post",
// //           message: `${user.username} created a new post`,
// //           from: user.username,
// //           postId: post._id?.toString(),
// //         })
// //       })
// //     }

// //     return post
// //   }
// // }


// import { Process, Processor } from "@nestjs/bull"
// import { Injectable } from "@nestjs/common"
// import { Job } from "bull"
// import { PostsService } from "./posts.service"
// import { UsersService } from "../users/users.service"
// import { NotificationsGateway } from "../notifications/notifications.gateway"

// @Processor("posts")
// @Injectable()
// export class PostsProcessor {
//   constructor(
//     private postsService: PostsService,
//     private usersService: UsersService,
//     private notificationsGateway: NotificationsGateway,
//   ) {}

//   @Process("create-post")
//   async handleCreatePost(job: Job) {
//     const { title, content, author } = job.data

//     // Save post to database
//     const post = await this.postsService.create({ title, content, author })

//     // Get author info and followers
//     const user = await this.usersService.findById(author)

//     // Send notifications to followers
//     if (user && user.followers && user.followers.length > 0) {
//       user.followers.forEach((followerId) => {
//         this.notificationsGateway.sendNotification(followerId.toString(), {
//           type: "new_post",
//           message: `${user.username} created a new post`,
//           from: user.username,
//           postId: post._id?.toString(),
//         })
//       })
//     }

//     return post
//   }
// }


import { Process, Processor } from "@nestjs/bull"
import { Injectable } from "@nestjs/common"
import  { Job } from "bull"
import  { PostsService } from "./posts.service"
import  { UsersService } from "../users/users.service"
import  { NotificationsGateway } from "../notifications/notifications.gateway"

@Processor("posts")
@Injectable()
export class PostsProcessor {
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private notificationsGateway: NotificationsGateway,
  ) {}

  @Process("create-post")
  async handleCreatePost(job: Job) {
    const { title, content, author } = job.data

    // Save post to database
    const post = await this.postsService.create({ title, content, author })

    // Get author info and followers
    const user = await this.usersService.findById(author)

    // Send notifications to followers
    if (user && user.followers && user.followers.length > 0) {
      user.followers.forEach((followerId) => {
        this.notificationsGateway.sendNotification(followerId.toString(), {
          type: "new_post",
          message: `${user.username} created a new post`,
          from: user.username,
          postId: post._id?.toString(),
        })
      })
    }

    return post
  }
}
