// // // // // // import { Injectable } from "@nestjs/common"
// // // // // // import type { Model } from "mongoose"
// // // // // // import type { Queue } from "bull"
// // // // // // import type { Post, PostDocument } from "./schemas/post.schema"
// // // // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // // // @Injectable()
// // // // // // export class PostsService {
// // // // // //   private postModel: Model<PostDocument>
// // // // // //   private postsQueue: Queue

// // // // // //   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
// // // // // //     this.postModel = postModel
// // // // // //     this.postsQueue = postsQueue
// // // // // //   }

// // // // // //   async queuePost(createPostDto: CreatePostDto, userId: string) {
// // // // // //     await this.postsQueue.add(
// // // // // //       "create-post",
// // // // // //       {
// // // // // //         ...createPostDto,
// // // // // //         author: userId,
// // // // // //       },
// // // // // //       {
// // // // // //         delay: 5000, // 5 second delay
// // // // // //       },
// // // // // //     )

// // // // // //     return { message: "Post queued for creation" }
// // // // // //   }

// // // // // //   async create(createPostDto: CreatePostDto & { author: string }): Promise<Post> {
// // // // // //     const createdPost = new this.postModel(createPostDto)
// // // // // //     return createdPost.save()
// // // // // //   }

// // // // // //   async findTimeline(userId: string, following: string[]): Promise<Post[]> {
// // // // // //     return this.postModel
// // // // // //       .find({ author: { $in: [...following, userId] } })
// // // // // //       .populate("author", "username")
// // // // // //       .sort({ createdAt: -1 })
// // // // // //       .exec()
// // // // // //   }
// // // // // // }


// // // // // import { Injectable } from "@nestjs/common"
// // // // // import type { Model } from "mongoose"
// // // // // import type { Queue } from "bull"
// // // // // import type { Post, PostDocument } from "./schemas/post.schema"
// // // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // // @Injectable()
// // // // // export class PostsService {
// // // // //   private postModel: Model<PostDocument>
// // // // //   private postsQueue: Queue

// // // // //   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
// // // // //     this.postModel = postModel
// // // // //     this.postsQueue = postsQueue
// // // // //   }

// // // // //   async queuePost(createPostDto: CreatePostDto, userId: string) {
// // // // //     await this.postsQueue.add(
// // // // //       "create-post",
// // // // //       {
// // // // //         ...createPostDto,
// // // // //         author: userId,
// // // // //       },
// // // // //       {
// // // // //         delay: 5000, // 5 second delay
// // // // //       },
// // // // //     )

// // // // //     return { message: "Post queued for creation" }
// // // // //   }

// // // // //   async create(createPostDto: CreatePostDto & { author: string }): Promise<Post> {
// // // // //     const createdPost = new this.postModel(createPostDto)
// // // // //     return createdPost.save()
// // // // //   }

// // // // //   async findTimeline(userId: string, following: string[]): Promise<Post[]> {
// // // // //     return this.postModel
// // // // //       .find({ author: { $in: [...following, userId] } })
// // // // //       .populate("author", "username")
// // // // //       .sort({ createdAt: -1 })
// // // // //       .exec()
// // // // //   }
// // // // // }


// // // // import { Injectable } from "@nestjs/common"
// // // // import type { Model } from "mongoose"
// // // // import type { Queue } from "bull"
// // // // import type { PostDocument } from "./schemas/post.schema"
// // // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // // @Injectable()
// // // // export class PostsService {
// // // //   private postModel: Model<PostDocument>
// // // //   private postsQueue: Queue

// // // //   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
// // // //     this.postModel = postModel
// // // //     this.postsQueue = postsQueue
// // // //   }

// // // //   async queuePost(createPostDto: CreatePostDto, userId: string) {
// // // //     await this.postsQueue.add(
// // // //       "create-post",
// // // //       {
// // // //         ...createPostDto,
// // // //         author: userId,
// // // //       },
// // // //       {
// // // //         delay: 5000, // 5 second delay
// // // //       },
// // // //     )

// // // //     return { message: "Post queued for creation" }
// // // //   }

// // // //   async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
// // // //     const createdPost = new this.postModel(createPostDto)
// // // //     return createdPost.save()
// // // //   }

// // // //   async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
// // // //     return this.postModel
// // // //       .find({ author: { $in: [...following, userId] } })
// // // //       .populate("author", "username")
// // // //       .sort({ createdAt: -1 })
// // // //       .exec()
// // // //   }
// // // // }


// // // import { Injectable } from "@nestjs/common"
// // // import type { Model } from "mongoose"
// // // import type { Queue } from "bull"
// // // import type { PostDocument } from "./schemas/post.schema"
// // // import type { CreatePostDto } from "./dto/create-post.dto"

// // // @Injectable()
// // // export class PostsService {
// // //   private postModel: Model<PostDocument>
// // //   private postsQueue: Queue

// // //   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
// // //     this.postModel = postModel
// // //     this.postsQueue = postsQueue
// // //   }

// // //   async queuePost(createPostDto: CreatePostDto, userId: string) {
// // //     await this.postsQueue.add(
// // //       "create-post",
// // //       {
// // //         ...createPostDto,
// // //         author: userId,
// // //       },
// // //       {
// // //         delay: 5000, // 5 second delay
// // //       },
// // //     )

// // //     return { message: "Post queued for creation" }
// // //   }

// // //   async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
// // //     const createdPost = new this.postModel(createPostDto)
// // //     return createdPost.save()
// // //   }

// // //   async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
// // //     return this.postModel
// // //       .find({ author: { $in: [...following, userId] } })
// // //       .populate("author", "username")
// // //       .sort({ createdAt: -1 })
// // //       .exec()
// // //   }
// // // }


// // import { Injectable } from "@nestjs/common"
// // import type { Model } from "mongoose"
// // import type { Queue } from "bull"
// // import type { PostDocument } from "./schemas/post.schema"
// // import type { CreatePostDto } from "./dto/create-post.dto"

// // @Injectable()
// // export class PostsService {
// //   private postModel: Model<PostDocument>
// //   private postsQueue: Queue

// //   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
// //     this.postModel = postModel
// //     this.postsQueue = postsQueue
// //   }

// //   async queuePost(createPostDto: CreatePostDto, userId: string) {
// //     await this.postsQueue.add(
// //       "create-post",
// //       {
// //         ...createPostDto,
// //         author: userId,
// //       },
// //       {
// //         delay: 5000, // 5 second delay
// //       },
// //     )

// //     return { message: "Post queued for creation" }
// //   }

// //   async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
// //     const createdPost = new this.postModel(createPostDto)
// //     return createdPost.save()
// //   }

// //   async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
// //     return this.postModel
// //       .find({ author: { $in: [...following, userId] } })
// //       .populate("author", "username")
// //       .sort({ createdAt: -1 })
// //       .exec()
// //   }
// // }

// import { Injectable } from "@nestjs/common"
// import { Model } from "mongoose"
// import { Queue } from "bull"
// import { PostDocument } from "./schemas/post.schema"
// import { CreatePostDto } from "./dto/create-post.dto"

// @Injectable()
// export class PostsService {
//   private postModel: Model<PostDocument>
//   private postsQueue: Queue

//   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
//     this.postModel = postModel
//     this.postsQueue = postsQueue
//   }

//   async queuePost(createPostDto: CreatePostDto, userId: string) {
//     await this.postsQueue.add(
//       "create-post",
//       {
//         ...createPostDto,
//         author: userId,
//       },
//       {
//         delay: 5000, // 5 second delay
//       },
//     )

//     return { message: "Post queued for creation" }
//   }

//   async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
//     const createdPost = new this.postModel(createPostDto)
//     return createdPost.save()
//   }

//   async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
//     return this.postModel
//       .find({ author: { $in: [...following, userId] } })
//       .populate("author", "username")
//       .sort({ createdAt: -1 })
//       .exec()
//   }
// }







// import { Injectable } from "@nestjs/common"
// import { InjectModel } from "@nestjs/mongoose";
// import { InjectQueue } from "@nestjs/bull";
// import  { Model } from "mongoose"
// import  { Queue } from "bull"
// import  { PostDocument } from "./schemas/post.schema"
// import  { CreatePostDto } from "./dto/create-post.dto"

// @Injectable()
// export class PostsService {
//   private postModel: Model<PostDocument>
//   private postsQueue: Queue

//   constructor(postModel: Model<PostDocument>, postsQueue: Queue) {
//     this.postModel = postModel
//     this.postsQueue = postsQueue
//   }

//   async queuePost(createPostDto: CreatePostDto, userId: string) {
//     await this.postsQueue.add(
//       "create-post",
//       {
//         ...createPostDto,
//         author: userId,
//       },
//       {
//         delay: 5000, // 5 second delay
//       },
//     )

//     return { message: "Post queued for creation" }
//   }

//   async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
//     const createdPost = new this.postModel(createPostDto)
//     return createdPost.save()
//   }

//   async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
//     return this.postModel
//       .find({ author: { $in: [...following, userId] } })
//       .populate("author", "username")
//       .sort({ createdAt: -1 })
//       .exec()
//   }
// }


import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectQueue } from "@nestjs/bull";
import { Model } from "mongoose";
import { Queue } from "bull";

import { PostDocument } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel("Post") private readonly postModel: Model<PostDocument>, // ✅ fix
    @InjectQueue("posts") private readonly postsQueue: Queue,             // ✅ fix
  ) {}

  async queuePost(createPostDto: CreatePostDto, userId: string) {
    await this.postsQueue.add(
      "create-post",
      {
        ...createPostDto,
        author: userId,
      },
      {
        delay: 5000,
      },
    );
    return { message: "Post queued for creation" };
  }

  async create(createPostDto: CreatePostDto & { author: string }): Promise<PostDocument> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findTimeline(userId: string, following: string[]): Promise<PostDocument[]> {
    return this.postModel
      .find({ author: { $in: [...following, userId] } })
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .exec();
  }
}
