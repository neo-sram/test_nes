import { Inject, Injectable } from '@nestjs/common';
import { writer } from 'repl';
import { User } from 'src/dtos/userDto';

@Injectable()
export class UserService {
  users: User[] = [];

  allUsers() {
    return this.users;
  }

  clearAll() {
    this.users = [];
    return this.users;
  }

  getById(id: number) {
    console.log(id);
    return this.users.find((user) => user.id == id);
  }

  getByName(name: string) {
    console.log(name);
    return this.users.find((user) => user.name == name);
  }

  create(user: User) {
    this.users.push(user);
  }
}
