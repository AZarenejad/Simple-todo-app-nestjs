import {Controller, Request, Get, Post, UseGuards, Header} from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from "@nestjs/passport";
import {LocalAuthGuard} from "./auth/guards/local-auth.guard";
import {ApiBearerAuth, ApiBody} from "@nestjs/swagger";
import CreateUserDto from "./user/dto/create-user.dto";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/guards/jwt-auth.guard";
import {Public} from "./auth/public.decorator";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly authService: AuthService
  ) {}


  @Public()
  @Header('Content-Type', 'application/json')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Request() req) {
    return req.user;
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
