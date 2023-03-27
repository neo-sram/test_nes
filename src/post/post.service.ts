import { Get, Inject, Injectable } from '@nestjs/common';
import { Blog } from 'src/dtos/blogDto';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  @Inject(UserService)
  private readonly userService: UserService;

  create(post: Blog) {
    if (!post.writer || typeof post.writer !== 'number') {
      throw new Error(`Invalid writer ID: ${post.writer}`);
    }
    const user = this.userService.getById(post.writer);
    if (!user) {
      throw new Error(`User with ID ${post.writer} not found`);
    }
    if (!user.blogs) {
      user.blogs = [];
    }
    user.blogs.push(post);
    post.comments = [];
  }

  listAllBlogs(id: number) {
    return this.userService.getById(id)?.blogs;
  }
}
