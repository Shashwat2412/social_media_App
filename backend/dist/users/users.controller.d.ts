import { Request } from "express";
import { UsersService } from "./users.service";
import { NotificationsGateway } from "../notifications/notifications.gateway";
interface AuthenticatedRequest extends Request {
    user: {
        sub: string;
        email: string;
    };
}
export declare class UsersController {
    private usersService;
    private notificationsGateway;
    constructor(usersService: UsersService, notificationsGateway: NotificationsGateway);
    findAll(): Promise<import("./schemas/user.schema").UserDocument[]>;
    follow(req: AuthenticatedRequest, targetUserId: string): Promise<{
        message: string;
    }>;
    unfollow(req: AuthenticatedRequest, targetUserId: string): Promise<{
        message: string;
    }>;
}
export {};
