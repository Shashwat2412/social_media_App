// // // // // // import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// // // // // // import type { JwtService } from "@nestjs/jwt"
// // // // // // import type { UsersService } from "../users/users.service"
// // // // // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"
// // // // // // import * as bcrypt from "bcrypt"

// // // // // // @Injectable()
// // // // // // export class AuthService {
// // // // // //   constructor(
// // // // // //     private usersService: UsersService,
// // // // // //     private jwtService: JwtService,
// // // // // //   ) {}

// // // // // //   async signup(createUserDto: CreateUserDto) {
// // // // // //     const existingUser = await this.usersService.findByEmail(createUserDto.email)
// // // // // //     if (existingUser) {
// // // // // //       throw new ConflictException("User already exists")
// // // // // //     }

// // // // // //     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
// // // // // //     const user = await this.usersService.create({
// // // // // //       ...createUserDto,
// // // // // //       password: hashedPassword,
// // // // // //     })

// // // // // //     const payload = { sub: user._id, email: user.email }
// // // // // //     return {
// // // // // //       access_token: this.jwtService.sign(payload),
// // // // // //       user: { id: user._id, email: user.email, username: user.username },
// // // // // //     }
// // // // // //   }

// // // // // //   async login(loginDto: LoginDto) {
// // // // // //     const user = await this.usersService.findByEmail(loginDto.email)
// // // // // //     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
// // // // // //       throw new UnauthorizedException("Invalid credentials")
// // // // // //     }

// // // // // //     const payload = { sub: user._id, email: user.email }
// // // // // //     return {
// // // // // //       access_token: this.jwtService.sign(payload),
// // // // // //       user: { id: user._id, email: user.email, username: user.username },
// // // // // //     }
// // // // // //   }
// // // // // // }

// // // // // import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// // // // // import type { JwtService } from "@nestjs/jwt"
// // // // // import type { UsersService } from "../users/users.service"
// // // // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"
// // // // // import * as bcrypt from "bcrypt"

// // // // // @Injectable()
// // // // // export class AuthService {
// // // // //   constructor(
// // // // //     private usersService: UsersService,
// // // // //     private jwtService: JwtService,
// // // // //   ) {}

// // // // //   async signup(createUserDto: CreateUserDto) {
// // // // //     const existingUser = await this.usersService.findByEmail(createUserDto.email)
// // // // //     if (existingUser) {
// // // // //       throw new ConflictException("User already exists")
// // // // //     }

// // // // //     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
// // // // //     const user = await this.usersService.create({
// // // // //       ...createUserDto,
// // // // //       password: hashedPassword,
// // // // //     })

// // // // //     const payload = { sub: user._id, email: user.email }
// // // // //     return {
// // // // //       access_token: this.jwtService.sign(payload),
// // // // //       user: { id: user._id, email: user.email, username: user.username },
// // // // //     }
// // // // //   }

// // // // //   async login(loginDto: LoginDto) {
// // // // //     const user = await this.usersService.findByEmail(loginDto.email)
// // // // //     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
// // // // //       throw new UnauthorizedException("Invalid credentials")
// // // // //     }

// // // // //     const payload = { sub: user._id, email: user.email }
// // // // //     return {
// // // // //       access_token: this.jwtService.sign(payload),
// // // // //       user: { id: user._id, email: user.email, username: user.username },
// // // // //     }
// // // // //   }
// // // // // }


// // // // import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// // // // import type { JwtService } from "@nestjs/jwt"
// // // // import type { UsersService } from "../users/users.service"
// // // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"
// // // // import * as bcrypt from "bcrypt"

// // // // @Injectable()
// // // // export class AuthService {
// // // //   constructor(
// // // //     private usersService: UsersService,
// // // //     private jwtService: JwtService,
// // // //   ) {}

// // // //   async signup(createUserDto: CreateUserDto) {
// // // //     const existingUser = await this.usersService.findByEmail(createUserDto.email)
// // // //     if (existingUser) {
// // // //       throw new ConflictException("User already exists")
// // // //     }

// // // //     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
// // // //     const user = await this.usersService.create({
// // // //       ...createUserDto,
// // // //       password: hashedPassword,
// // // //     })

// // // //     const payload = { sub: user._id?.toString(), email: user.email }
// // // //     return {
// // // //       access_token: this.jwtService.sign(payload),
// // // //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// // // //     }
// // // //   }

// // // //   async login(loginDto: LoginDto) {
// // // //     const user = await this.usersService.findByEmail(loginDto.email)
// // // //     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
// // // //       throw new UnauthorizedException("Invalid credentials")
// // // //     }

// // // //     const payload = { sub: user._id?.toString(), email: user.email }
// // // //     return {
// // // //       access_token: this.jwtService.sign(payload),
// // // //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// // // //     }
// // // //   }
// // // // }


// // // import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// // // import type { JwtService } from "@nestjs/jwt"
// // // import type { UsersService } from "../users/users.service"
// // // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"
// // // import * as bcrypt from "bcrypt"

// // // @Injectable()
// // // export class AuthService {
// // //   constructor(
// // //     private usersService: UsersService,
// // //     private jwtService: JwtService,
// // //   ) {}

// // //   async signup(createUserDto: CreateUserDto) {
// // //     const existingUser = await this.usersService.findByEmail(createUserDto.email)
// // //     if (existingUser) {
// // //       throw new ConflictException("User already exists")
// // //     }

// // //     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
// // //     const user = await this.usersService.create({
// // //       ...createUserDto,
// // //       password: hashedPassword,
// // //     })

// // //     const payload = { sub: user._id?.toString(), email: user.email }
// // //     return {
// // //       access_token: this.jwtService.sign(payload),
// // //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// // //     }
// // //   }

// // //   async login(loginDto: LoginDto) {
// // //     const user = await this.usersService.findByEmail(loginDto.email)
// // //     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
// // //       throw new UnauthorizedException("Invalid credentials")
// // //     }

// // //     const payload = { sub: user._id?.toString(), email: user.email }
// // //     return {
// // //       access_token: this.jwtService.sign(payload),
// // //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// // //     }
// // //   }
// // // }

// // import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// // import type { JwtService } from "@nestjs/jwt"
// // import type { UsersService } from "../users/users.service"
// // import type { CreateUserDto, LoginDto } from "./dto/auth.dto"
// // import * as bcrypt from "bcrypt"

// // @Injectable()
// // export class AuthService {
// //   constructor(
// //     private usersService: UsersService,
// //     private jwtService: JwtService,
// //   ) {}

// //   async signup(createUserDto: CreateUserDto) {
// //     const existingUser = await this.usersService.findByEmail(createUserDto.email)
// //     if (existingUser) {
// //       throw new ConflictException("User already exists")
// //     }

// //     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
// //     const user = await this.usersService.create({
// //       ...createUserDto,
// //       password: hashedPassword,
// //     })

// //     const payload = { sub: user._id?.toString(), email: user.email }
// //     return {
// //       access_token: this.jwtService.sign(payload),
// //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// //     }
// //   }

// //   async login(loginDto: LoginDto) {
// //     const user = await this.usersService.findByEmail(loginDto.email)
// //     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
// //       throw new UnauthorizedException("Invalid credentials")
// //     }

// //     const payload = { sub: user._id?.toString(), email: user.email }
// //     return {
// //       access_token: this.jwtService.sign(payload),
// //       user: { id: user._id?.toString(), email: user.email, username: user.username },
// //     }
// //   }
// // }


// import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
// import { JwtService } from "@nestjs/jwt"
// import { UsersService } from "../users/users.service"
// import { CreateUserDto, LoginDto } from "./dto/auth.dto"
// import * as bcrypt from "bcrypt"

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async signup(createUserDto: CreateUserDto) {
//     const existingUser = await this.usersService.findByEmail(createUserDto.email)
//     if (existingUser) {
//       throw new ConflictException("User already exists")
//     }

//     const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
//     const user = await this.usersService.create({
//       ...createUserDto,
//       password: hashedPassword,
//     })

//     const payload = { sub: user._id?.toString(), email: user.email }
//     return {
//       access_token: this.jwtService.sign(payload),
//       user: { id: user._id?.toString(), email: user.email, username: user.username },
//     }
//   }

//   async login(loginDto: LoginDto) {
//     const user = await this.usersService.findByEmail(loginDto.email)
//     if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
//       throw new UnauthorizedException("Invalid credentials")
//     }

//     const payload = { sub: user._id?.toString(), email: user.email }
//     return {
//       access_token: this.jwtService.sign(payload),
//       user: { id: user._id?.toString(), email: user.email, username: user.username },
//     }
//   }
// }


import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common"
import  { JwtService } from "@nestjs/jwt"
import  { UsersService } from "../users/users.service"
import  { CreateUserDto, LoginDto } from "./dto/auth.dto"
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const existingUser = await this.usersService.findByEmail(createUserDto.email)
    if (existingUser) {
      throw new ConflictException("User already exists")
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    })

    const payload = { sub: user._id?.toString(), email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user._id?.toString(), email: user.email, username: user.username },
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email)
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const payload = { sub: user._id?.toString(), email: user.email }
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user._id?.toString(), email: user.email, username: user.username },
    }
  }
}
