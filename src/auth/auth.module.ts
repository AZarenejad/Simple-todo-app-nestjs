import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserServices} from "../user/user.service";
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport"
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtModule, JwtService} from "@nestjs/jwt";
import { jwtConstants } from './constants';
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
  imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '6000s' },
      }),
  ],
  providers: [AuthService, UserServices, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})

export class AuthModule {}
