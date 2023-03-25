import { Get, Inject, Injectable } from '@nestjs/common';
import { Blog } from 'src/dtos/blogDto';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  @Inject(UserService)
  private readonly userService: UserService;

  create(contente: string, id: number) {
    const post: Blog = new Blog(id, contente);
    this.userService.getById(id)?.blogs.push(post);
  }

  listAllBlogs(id: number) {
    return this.userService.getById(id)?.blogs;
  }
}
