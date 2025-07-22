// // // // // // import { Injectable } from "@nestjs/common"
// // // // // // import type { Model } from "mongoose"
// // // // // // import type { User, UserDocument } from "./schemas/user.schema"
// // // // // // import type { CreateUserDto } from "../auth/dto/auth.dto"

// // // // // // @Injectable()
// // // // // // export class UsersService {
// // // // // //   private userModel: Model<UserDocument>

// // // // // //   constructor(userModel: Model<UserDocument>) {
// // // // // //     this.userModel = userModel
// // // // // //   }

// // // // // //   async create(createUserDto: CreateUserDto): Promise<User> {
// // // // // //     const createdUser = new this.userModel(createUserDto)
// // // // // //     return createdUser.save()
// // // // // //   }

// // // // // //   async findByEmail(email: string): Promise<User | null> {
// // // // // //     return this.userModel.findOne({ email }).exec()
// // // // // //   }

// // // // // //   async findById(id: string): Promise<User | null> {
// // // // // //     return this.userModel.findById(id).exec()
// // // // // //   }

// // // // // //   async findAll(): Promise<User[]> {
// // // // // //     return this.userModel.find().select("-password").exec()
// // // // // //   }

// // // // // //   async follow(userId: string, targetUserId: string): Promise<void> {
// // // // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // // // //       $addToSet: { following: targetUserId },
// // // // // //     })
// // // // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // // // //       $addToSet: { followers: userId },
// // // // // //     })
// // // // // //   }

// // // // // //   async unfollow(userId: string, targetUserId: string): Promise<void> {
// // // // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // // // //       $pull: { following: targetUserId },
// // // // // //     })
// // // // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // // // //       $pull: { followers: userId },
// // // // // //     })
// // // // // //   }
// // // // // // }


// // // // // import { Injectable } from "@nestjs/common"
// // // // // import type { Model } from "mongoose"
// // // // // import type { User, UserDocument } from "./schemas/user.schema"
// // // // // import type { CreateUserDto } from "../auth/dto/auth.dto"

// // // // // @Injectable()
// // // // // export class UsersService {
// // // // //   private userModel: Model<UserDocument>

// // // // //   constructor(userModel: Model<UserDocument>) {
// // // // //     this.userModel = userModel
// // // // //   }

// // // // //   async create(createUserDto: CreateUserDto): Promise<User> {
// // // // //     const createdUser = new this.userModel(createUserDto)
// // // // //     return createdUser.save()
// // // // //   }

// // // // //   async findByEmail(email: string): Promise<User | null> {
// // // // //     return this.userModel.findOne({ email }).exec()
// // // // //   }

// // // // //   async findById(id: string): Promise<User | null> {
// // // // //     return this.userModel.findById(id).exec()
// // // // //   }

// // // // //   async findAll(): Promise<User[]> {
// // // // //     return this.userModel.find().select("-password").exec()
// // // // //   }

// // // // //   async follow(userId: string, targetUserId: string): Promise<void> {
// // // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // // //       $addToSet: { following: targetUserId },
// // // // //     })
// // // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // // //       $addToSet: { followers: userId },
// // // // //     })
// // // // //   }

// // // // //   async unfollow(userId: string, targetUserId: string): Promise<void> {
// // // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // // //       $pull: { following: targetUserId },
// // // // //     })
// // // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // // //       $pull: { followers: userId },
// // // // //     })
// // // // //   }
// // // // // }


// // // // import { Injectable } from "@nestjs/common"
// // // // import type { Model } from "mongoose"
// // // // import type { UserDocument } from "./schemas/user.schema"
// // // // import type { CreateUserDto } from "../auth/dto/auth.dto"

// // // // @Injectable()
// // // // export class UsersService {
// // // //   private userModel: Model<UserDocument>

// // // //   constructor(userModel: Model<UserDocument>) {
// // // //     this.userModel = userModel
// // // //   }

// // // //   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
// // // //     const createdUser = new this.userModel(createUserDto)
// // // //     return createdUser.save()
// // // //   }

// // // //   async findByEmail(email: string): Promise<UserDocument | null> {
// // // //     return this.userModel.findOne({ email }).exec()
// // // //   }

// // // //   async findById(id: string): Promise<UserDocument | null> {
// // // //     return this.userModel.findById(id).exec()
// // // //   }

// // // //   async findAll(): Promise<UserDocument[]> {
// // // //     return this.userModel.find().select("-password").exec()
// // // //   }

// // // //   async follow(userId: string, targetUserId: string): Promise<void> {
// // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // //       $addToSet: { following: targetUserId },
// // // //     })
// // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // //       $addToSet: { followers: userId },
// // // //     })
// // // //   }

// // // //   async unfollow(userId: string, targetUserId: string): Promise<void> {
// // // //     await this.userModel.findByIdAndUpdate(userId, {
// // // //       $pull: { following: targetUserId },
// // // //     })
// // // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // // //       $pull: { followers: userId },
// // // //     })
// // // //   }
// // // // }


// // // import { Injectable } from "@nestjs/common"
// // // import type { Model } from "mongoose"
// // // import type { UserDocument } from "./schemas/user.schema"
// // // import type { CreateUserDto } from "../auth/dto/auth.dto"

// // // @Injectable()
// // // export class UsersService {
// // //   private userModel: Model<UserDocument>

// // //   constructor(userModel: Model<UserDocument>) {
// // //     this.userModel = userModel
// // //   }

// // //   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
// // //     const createdUser = new this.userModel(createUserDto)
// // //     return createdUser.save()
// // //   }

// // //   async findByEmail(email: string): Promise<UserDocument | null> {
// // //     return this.userModel.findOne({ email }).exec()
// // //   }

// // //   async findById(id: string): Promise<UserDocument | null> {
// // //     return this.userModel.findById(id).exec()
// // //   }

// // //   async findAll(): Promise<UserDocument[]> {
// // //     return this.userModel.find().select("-password").exec()
// // //   }

// // //   async follow(userId: string, targetUserId: string): Promise<void> {
// // //     await this.userModel.findByIdAndUpdate(userId, {
// // //       $addToSet: { following: targetUserId },
// // //     })
// // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // //       $addToSet: { followers: userId },
// // //     })
// // //   }

// // //   async unfollow(userId: string, targetUserId: string): Promise<void> {
// // //     await this.userModel.findByIdAndUpdate(userId, {
// // //       $pull: { following: targetUserId },
// // //     })
// // //     await this.userModel.findByIdAndUpdate(targetUserId, {
// // //       $pull: { followers: userId },
// // //     })
// // //   }
// // // }

// // import { Injectable } from "@nestjs/common"
// // import type { Model } from "mongoose"
// // import type { UserDocument } from "./schemas/user.schema"
// // import type { CreateUserDto } from "../auth/dto/auth.dto"

// // @Injectable()
// // export class UsersService {
// //   private userModel: Model<UserDocument>

// //   constructor(userModel: Model<UserDocument>) {
// //     this.userModel = userModel
// //   }

// //   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
// //     const createdUser = new this.userModel(createUserDto)
// //     return createdUser.save()
// //   }

// //   async findByEmail(email: string): Promise<UserDocument | null> {
// //     return this.userModel.findOne({ email }).exec()
// //   }

// //   async findById(id: string): Promise<UserDocument | null> {
// //     return this.userModel.findById(id).exec()
// //   }

// //   async findAll(): Promise<UserDocument[]> {
// //     return this.userModel.find().select("-password").exec()
// //   }

// //   async follow(userId: string, targetUserId: string): Promise<void> {
// //     await this.userModel.findByIdAndUpdate(userId, {
// //       $addToSet: { following: targetUserId },
// //     })
// //     await this.userModel.findByIdAndUpdate(targetUserId, {
// //       $addToSet: { followers: userId },
// //     })
// //   }

// //   async unfollow(userId: string, targetUserId: string): Promise<void> {
// //     await this.userModel.findByIdAndUpdate(userId, {
// //       $pull: { following: targetUserId },
// //     })
// //     await this.userModel.findByIdAndUpdate(targetUserId, {
// //       $pull: { followers: userId },
// //     })
// //   }
// // }
// import { Injectable } from "@nestjs/common"
// import { Model } from "mongoose"
// import { UserDocument } from "./schemas/user.schema"
// import { CreateUserDto } from "../auth/dto/auth.dto"

// @Injectable()
// export class UsersService {
//   private userModel: Model<UserDocument>

//   constructor(userModel: Model<UserDocument>) {
//     this.userModel = userModel
//   }

//   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
//     const createdUser = new this.userModel(createUserDto)
//     return createdUser.save()
//   }

//   async findByEmail(email: string): Promise<UserDocument | null> {
//     return this.userModel.findOne({ email }).exec()
//   }

//   async findById(id: string): Promise<UserDocument | null> {
//     return this.userModel.findById(id).exec()
//   }

//   async findAll(): Promise<UserDocument[]> {
//     return this.userModel.find().select("-password").exec()
//   }

//   async follow(userId: string, targetUserId: string): Promise<void> {
//     await this.userModel.findByIdAndUpdate(userId, {
//       $addToSet: { following: targetUserId },
//     })
//     await this.userModel.findByIdAndUpdate(targetUserId, {
//       $addToSet: { followers: userId },
//     })
//   }

//   async unfollow(userId: string, targetUserId: string): Promise<void> {
//     await this.userModel.findByIdAndUpdate(userId, {
//       $pull: { following: targetUserId },
//     })
//     await this.userModel.findByIdAndUpdate(targetUserId, {
//       $pull: { followers: userId },
//     })
//   }
// }

// import { Injectable } from "@nestjs/common"
// import  { Model } from "mongoose"
// import  { UserDocument } from "./schemas/user.schema"
// import { CreateUserDto } from "../auth/dto/auth.dto"

// @Injectable()
// export class UsersService {
//   private userModel: Model<UserDocument>

//   constructor(userModel: Model<UserDocument>) {
//     this.userModel = userModel
//   }

//   async create(createUserDto: CreateUserDto): Promise<UserDocument> {
//     const createdUser = new this.userModel(createUserDto)
//     return createdUser.save()
//   }

//   async findByEmail(email: string): Promise<UserDocument | null> {
//     return this.userModel.findOne({ email }).exec()
//   }

//   async findById(id: string): Promise<UserDocument | null> {
//     return this.userModel.findById(id).exec()
//   }

//   async findAll(): Promise<UserDocument[]> {
//     return this.userModel.find().select("-password").exec()
//   }

//   async follow(userId: string, targetUserId: string): Promise<void> {
//     await this.userModel.findByIdAndUpdate(userId, {
//       $addToSet: { following: targetUserId },
//     })
//     await this.userModel.findByIdAndUpdate(targetUserId, {
//       $addToSet: { followers: userId },
//     })
//   }

//   async unfollow(userId: string, targetUserId: string): Promise<void> {
//     await this.userModel.findByIdAndUpdate(userId, {
//       $pull: { following: targetUserId },
//     })
//     await this.userModel.findByIdAndUpdate(targetUserId, {
//       $pull: { followers: userId },
//     })
//   }
// }
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose" // ✅ ADD THIS
import { Model } from "mongoose"
import {User, UserDocument } from "./schemas/user.schema"
import { CreateUserDto } from "../auth/dto/auth.dto"

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private  userModel: Model<UserDocument>, // ✅ FIXED
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec()
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec()
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().select("-password").exec()
  }

  async follow(userId: string, targetUserId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, {
      $addToSet: { following: targetUserId },
    })
    await this.userModel.findByIdAndUpdate(targetUserId, {
      $addToSet: { followers: userId },
    })
  }

  async unfollow(userId: string, targetUserId: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, {
      $pull: { following: targetUserId },
    })
    await this.userModel.findByIdAndUpdate(targetUserId, {
      $pull: { followers: userId },
    })
  }
}
