import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {APP_GUARD} from "@nestjs/core";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Module({
  controllers: [TodoController],
  providers: [
      TodoService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class TodoModule {}
