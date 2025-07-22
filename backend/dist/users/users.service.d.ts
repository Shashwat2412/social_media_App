import { Model } from "mongoose";
import { UserDocument } from "./schemas/user.schema";
import { CreateUserDto } from "../auth/dto/auth.dto";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument | null>;
    findAll(): Promise<UserDocument[]>;
    follow(userId: string, targetUserId: string): Promise<void>;
    unfollow(userId: string, targetUserId: string): Promise<void>;
}
