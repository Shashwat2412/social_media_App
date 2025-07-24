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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const notifications_gateway_1 = require("../notifications/notifications.gateway");
let UsersController = class UsersController {
    constructor(usersService, notificationsGateway) {
        this.usersService = usersService;
        this.notificationsGateway = notificationsGateway;
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async follow(req, targetUserId) {
        const userId = req.user.sub;
        await this.usersService.follow(userId, targetUserId);
        const user = await this.usersService.findById(userId);
        if (user) {
            this.notificationsGateway.sendNotification(targetUserId, {
                type: "follow",
                message: `${user.username} followed you`,
                from: user.username,
                timestamp: new Date().toISOString(),
            });
        }
        return { message: "User followed successfully" };
    }
    async unfollow(req, targetUserId) {
        const userId = req.user.sub;
        await this.usersService.unfollow(userId, targetUserId);
        return { message: "User unfollowed successfully" };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("follow/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "follow", null);
__decorate([
    (0, common_1.Post)("unfollow/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unfollow", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        notifications_gateway_1.NotificationsGateway])
], UsersController);
//# sourceMappingURL=users.controller.js.map