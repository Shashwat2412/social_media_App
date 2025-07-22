import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { CreateUserDto, LoginDto } from "./dto/auth.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: string;
            username: string;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: string;
            username: string;
        };
    }>;
}
