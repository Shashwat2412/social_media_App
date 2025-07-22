import { Model } from "mongoose";
import { Queue } from "bull";
import { PostDocument } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostsService {
    private readonly postModel;
    private readonly postsQueue;
    constructor(postModel: Model<PostDocument>, postsQueue: Queue);
    queuePost(createPostDto: CreatePostDto, userId: string): Promise<{
        message: string;
    }>;
    create(createPostDto: CreatePostDto & {
        author: string;
    }): Promise<PostDocument>;
    findTimeline(userId: string, following: string[]): Promise<PostDocument[]>;
}
