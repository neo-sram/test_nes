import { Get, Injectable } from '@nestjs/common';
import { Blog } from 'src/dtos/blogDto';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(private userService: UserService) {}
  private posts: Blog[] = [];

  create(post: Blog) {
    this.posts.push(post);
  }

  listAllBlogs(id: number) {
    return this.userService.users[id].blogs;
  }
}
