import { Blog } from './blogDto';

export class User {
  id: number;
  name: string;
  age: number;
  blogs?: Blog[];
  comments?: Comment[];
}
