import { User } from './userDto';

export class Commentary {
  writer?: number;
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}
