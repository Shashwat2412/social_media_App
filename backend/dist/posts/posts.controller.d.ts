import { Request } from "express";
import { PostsService } from "./posts.service";
import { UsersService } from "../users/users.service";
import { CreatePostDto } from "./dto/create-post.dto";
interface AuthenticatedRequest extends Request {
    user: {
        sub: string;
        email: string;
    };
}
export declare class PostsController {
    private postsService;
    private usersService;
    constructor(postsService: PostsService, usersService: UsersService);
    create(req: AuthenticatedRequest, createPostDto: CreatePostDto): Promise<{
        message: string;
    }>;
    getTimeline(req: AuthenticatedRequest): Promise<import("./schemas/post.schema").PostDocument[]>;
}
export {};
