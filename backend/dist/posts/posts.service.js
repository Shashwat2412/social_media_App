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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bull_1 = require("@nestjs/bull");
const mongoose_2 = require("mongoose");
let PostsService = class PostsService {
    constructor(postModel, postsQueue) {
        this.postModel = postModel;
        this.postsQueue = postsQueue;
    }
    async queuePost(createPostDto, userId) {
        await this.postsQueue.add("create-post", {
            ...createPostDto,
            author: userId,
        }, {
            delay: 5000,
        });
        return { message: "Post queued for creation" };
    }
    async create(createPostDto) {
        const createdPost = new this.postModel(createPostDto);
        return createdPost.save();
    }
    async findTimeline(userId, following) {
        return this.postModel
            .find({ author: { $in: [...following, userId] } })
            .populate("author", "username")
            .sort({ createdAt: -1 })
            .exec();
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Post")),
    __param(1, (0, bull_1.InjectQueue)("posts")),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], PostsService);
//# sourceMappingURL=posts.service.js.map