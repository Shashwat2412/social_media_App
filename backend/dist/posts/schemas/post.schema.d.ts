import { Document, Types } from "mongoose";
export type PostDocument = Post & Document;
export declare class Post {
    _id?: Types.ObjectId;
    title: string;
    content: string;
    author: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any, any, Document<unknown, any, Post> & Post & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, Document<unknown, {}, import("mongoose").FlatRecord<Post>> & import("mongoose").FlatRecord<Post> & Required<{
    _id: Types.ObjectId;
}>>;
