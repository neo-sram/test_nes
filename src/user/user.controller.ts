import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/classes/userDto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: User) {
    this.userService.create(user);
  }

  @Get('all')
  async listAll(): Promise<User[]> {
    return this.userService.allUsers();
  }

  @Get(':name')
  async getById(@Param() name: string): Promise<any> {
    return this.userService.getUserById(name);
  }
}
