import { Get, Injectable } from '@nestjs/common';
import { Blog } from 'src/classes/blogDto';
import { UserController } from 'src/user/user.controller';

@Injectable()
export class PostService {
  private readonly posts: Blog[] = [];

  create(post: Blog) {
    this.posts.push(post);
  }

  allBlogs() {
    return this.posts;
  }
}
