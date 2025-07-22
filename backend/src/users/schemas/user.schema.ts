// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
// import { type Document, Types } from "mongoose"

// export type UserDocument = User & Document

// @Schema({ timestamps: true })
// export class User {
//   @Prop({ required: true, unique: true })
//   username: string

//   @Prop({ required: true, unique: true })
//   email: string

//   @Prop({ required: true })
//   password: string

//   @Prop({ type: [{ type: Types.ObjectId, ref: "User" }], default: [] })
//   followers: Types.ObjectId[]

//   @Prop({ type: [{ type: Types.ObjectId, ref: "User" }], default: [] })
//   following: Types.ObjectId[]
// }

// export const UserSchema = SchemaFactory.createForClass(User)


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose"

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {
  _id?: Types.ObjectId

  @Prop({ required: true, unique: true })
  username: string

  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ type: [{ type: Types.ObjectId, ref: "User" }], default: [] })
  followers: Types.ObjectId[]

  @Prop({ type: [{ type: Types.ObjectId, ref: "User" }], default: [] })
  following: Types.ObjectId[]
}

export const UserSchema = SchemaFactory.createForClass(User)
