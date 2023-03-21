import { Controller, Get, Post, Redirect } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post()
  create(): string {
    return 'new cat';
  }
  @Get()
  greet(): string {
    return 'hello';
  }
}
