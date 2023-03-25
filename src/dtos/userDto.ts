import { Blog } from './blogDto';
import { Commentary } from './commentaryDto';

export class User {
  id: number;
  name: string;
  age: number;
  blogs?: Blog[];
  comments?: Commentary[];
}
