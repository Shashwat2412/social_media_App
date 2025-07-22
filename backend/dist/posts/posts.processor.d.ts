import { Job } from "bull";
import { PostsService } from "./posts.service";
import { UsersService } from "../users/users.service";
import { NotificationsGateway } from "../notifications/notifications.gateway";
export declare class PostsProcessor {
    private postsService;
    private usersService;
    private notificationsGateway;
    constructor(postsService: PostsService, usersService: UsersService, notificationsGateway: NotificationsGateway);
    handleCreatePost(job: Job): Promise<import("./schemas/post.schema").PostDocument>;
}
