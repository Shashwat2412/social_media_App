// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
// import { type Document, Types } from "mongoose"

// export type PostDocument = Post & Document

// @Schema({ timestamps: true })
// export class Post {
//   @Prop({ required: true })
//   title: string

//   @Prop({ required: true })
//   content: string

//   @Prop({ type: Types.ObjectId, ref: "User", required: true })
//   author: Types.ObjectId
// }

// export const PostSchema = SchemaFactory.createForClass(Post)


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {  Document, Types } from "mongoose"

export type PostDocument = Post & Document

@Schema({ timestamps: true })
export class Post {
  _id?: Types.ObjectId

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  content: string

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  author: Types.ObjectId

  createdAt?: Date
  updatedAt?: Date
}

export const PostSchema = SchemaFactory.createForClass(Post)
