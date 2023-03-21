import { User } from './userDto';
import { Commentary } from './commentaryDto';

export class Blog {
  writer: User;
  readers: User[];
  content: string;
  commentaries: Commentary[];
}
