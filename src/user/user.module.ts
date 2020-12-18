import {forwardRef, Module} from '@nestjs/common';
import {UserServices} from './user.service';
import { UserController } from './user.controller';
import {AuthModule} from "../auth/auth.module";
import {APP_GUARD} from "@nestjs/core";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Module({
  imports: [
  ],
  controllers: [UserController],
  providers: [
      UserServices,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class UserModule {}
