import { User } from './userDto';
import { Commentary } from './commentaryDto';

export class Blog {
  writer: number;
  content: string;
  comments?: Commentary[];

  constructor(writer: number, content: string) {
    this.content = content;
    this.writer = writer;
    this.comments = [];
  }
}
