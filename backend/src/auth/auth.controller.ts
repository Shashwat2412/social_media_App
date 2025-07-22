// // // // // import { Controller, Post } from "@nestjs/common"
// // // // // import { Throttle } from "@nestjs/throttler"
// // // // // import type { AuthService } from "./auth.service"
// // // // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"

// // // // // @Controller("auth")
// // // // // export class AuthController {
// // // // //   constructor(private authService: AuthService) {}

// // // // //   @Post("signup")
// // // // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // // // //   async signup(createUserDto: CreateUserDto) {
// // // // //     return this.authService.signup(createUserDto)
// // // // //   }

// // // // //   @Post("login")
// // // // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // // // //   async login(loginDto: LoginDto) {
// // // // //     return this.authService.login(loginDto)
// // // // //   }
// // // // // }


// // // // import { Controller, Post } from "@nestjs/common"
// // // // import { Throttle } from "@nestjs/throttler"
// // // // import type { AuthService } from "./auth.service"
// // // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"

// // // // @Controller("auth")
// // // // export class AuthController {
// // // //   constructor(private authService: AuthService) {}

// // // //   @Post("signup")
// // // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // // //   async signup(createUserDto: CreateUserDto) {
// // // //     return this.authService.signup(createUserDto)
// // // //   }

// // // //   @Post("login")
// // // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // // //   async login(loginDto: LoginDto) {
// // // //     return this.authService.login(loginDto)
// // // //   }
// // // // }

// // // import { Controller, Post } from "@nestjs/common"
// // // import { Throttle } from "@nestjs/throttler"
// // // import type { AuthService } from "./auth.service"
// // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"

// // // @Controller("auth")
// // // export class AuthController {
// // //   constructor(private authService: AuthService) {}

// // //   @Post("signup")
// // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // //   async signup(createUserDto: CreateUserDto) {
// // //     return this.authService.signup(createUserDto)
// // //   }

// // //   @Post("login")
// // //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// // //   async login(loginDto: LoginDto) {
// // //     return this.authService.login(loginDto)
// // //   }
// // // }


// // import { Controller, Post } from "@nestjs/common"
// // import { Throttle } from "@nestjs/throttler"
// // import type { AuthService } from "./auth.service"
// // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"

// // @Controller("auth")
// // export class AuthController {
// //   constructor(private authService: AuthService) {}

// //   @Post("signup")
// //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// //   async signup(createUserDto: CreateUserDto) {
// //     return this.authService.signup(createUserDto)
// //   }

// //   @Post("login")
// //   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
// //   async login(loginDto: LoginDto) {
// //     return this.authService.login(loginDto)
// //   }
// // }


// import { Controller, Post } from "@nestjs/common"
// import { Throttle } from "@nestjs/throttler"
// import { AuthService } from "./auth.service"
// import { CreateUserDto, LoginDto } from "./dto/auth.dto"

// @Controller("auth")
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post("signup")
//   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
//   async signup(createUserDto: CreateUserDto) {
//     return this.authService.signup(createUserDto)
//   }

//   @Post("login")
//   @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 requests per minute
//   async login(loginDto: LoginDto) {
//     return this.authService.login(loginDto)
//   }
// }


import {Body, Controller, Post } from "@nestjs/common"
import { Throttle } from "@nestjs/throttler"
import  { AuthService } from "./auth.service"
import  { CreateUserDto, LoginDto } from "./dto/auth.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

   @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }

 @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
