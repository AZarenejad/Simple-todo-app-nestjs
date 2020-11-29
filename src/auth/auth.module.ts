import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UserServices} from "../user/user.service";
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, UserServices, LocalStrategy]
})

export class AuthModule {}
