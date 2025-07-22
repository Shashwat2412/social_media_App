import { Document, Types } from "mongoose";
export type UserDocument = User & Document;
export declare class User {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    followers: Types.ObjectId[];
    following: Types.ObjectId[];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: Types.ObjectId;
}>>;
