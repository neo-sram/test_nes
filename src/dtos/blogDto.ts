import { User } from './userDto';
import { Commentary } from './commentaryDto';

export class Blog {
  writer: number;
  content: string;
  commentaries?: Commentary[];
}
