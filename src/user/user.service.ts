import { Injectable } from '@nestjs/common';
import { User } from 'src/classes/userDto';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'taha',
      age: 19,
    },
    {
      id: 2,
      name: 'yasine',
      age: 20,
    },
    {
      id: 3,
      name: 'bob',
      age: 19,
    },
    {
      id: 4,
      name: 'jamel',
      age: 19,
    },
    {
      id: 5,
      name: 'sa3id',
      age: 19,
    },
  ];

  create(user: User) {
    this.users.push(user);
  }

  allUsers() {
    return this.users;
  }

  getUserById(name: string) {
    console.log(name);
    return this.users.find((user) => user.name == name);
  }
}
