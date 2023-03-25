import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/dtos/userDto';
import { UserService } from './user.service';

@Controller('userAuth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  create(@Body() user: User) {
    this.userService.create(user);
  }

  @Get('all')
  async listAll(): Promise<User[]> {
    return this.userService.allUsers();
  }

  @Get(':name')
  async getByName(@Param() name: string): Promise<any> {
    return this.userService.getByName(name);
  }

  @Get(':id')
  async getById(@Param() id: number): Promise<any> {
    return this.userService.getById(id);
  }

  @Post('clear')
  clearAll() {
    this.userService.clearAll();
  }
}
