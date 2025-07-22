import { AuthService } from "./auth.service";
import { CreateUserDto, LoginDto } from "./dto/auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
