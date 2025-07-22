"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const throttler_1 = require("@nestjs/throttler");
const bull_1 = require("@nestjs/bull");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const notifications_module_1 = require("./notifications/notifications.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://guptavedansh2003:eeWbB7XOggQz0s6o@cluster2.cudg071.mongodb.net/"),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 10,
                },
            ]),
            bull_1.BullModule.forRoot({
                redis: {
                    host: "localhost",
                    port: 6379,
                },
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: "your-secret-key",
                signOptions: { expiresIn: "24h" },
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            notifications_module_1.NotificationsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map