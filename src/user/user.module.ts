import {forwardRef, Module} from '@nestjs/common';
import {UserServices} from './user.service';
import { UserController } from './user.controller';
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
  ],
  controllers: [UserController],
  providers: [UserServices],
})
export class UserModule {}
