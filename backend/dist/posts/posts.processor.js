"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const users_service_1 = require("../users/users.service");
const notifications_gateway_1 = require("../notifications/notifications.gateway");
let PostsProcessor = class PostsProcessor {
    constructor(postsService, usersService, notificationsGateway) {
        this.postsService = postsService;
        this.usersService = usersService;
        this.notificationsGateway = notificationsGateway;
    }
    async handleCreatePost(job) {
        const { title, content, author } = job.data;
        const post = await this.postsService.create({ title, content, author });
        const user = await this.usersService.findById(author);
        if (user && user.followers && user.followers.length > 0) {
            user.followers.forEach((followerId) => {
                this.notificationsGateway.sendNotification(followerId.toString(), {
                    type: "new_post",
                    message: `${user.username} created a new post`,
                    from: user.username,
                    postId: post._id?.toString(),
                });
            });
        }
        return post;
    }
};
exports.PostsProcessor = PostsProcessor;
__decorate([
    (0, bull_1.Process)("create-post"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsProcessor.prototype, "handleCreatePost", null);
exports.PostsProcessor = PostsProcessor = __decorate([
    (0, bull_1.Processor)("posts"),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        users_service_1.UsersService,
        notifications_gateway_1.NotificationsGateway])
], PostsProcessor);
//# sourceMappingURL=posts.processor.js.map